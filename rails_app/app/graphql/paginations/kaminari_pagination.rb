module Paginations
  class KaminariPageInfo < GraphQL::Schema::Object
    field :current_page, Int, null: false
    field :total_count, Int, null: false
    field :total_pages, Int, null: false
  end

  class KaminariExtension < GraphQL::Schema::FieldExtension
    def apply
      field.argument(:page, "Int", required: false)
      field.argument(:page_size, "Int", required: false)
    end

    def resolve(object:, arguments:, **rest)
      next_args = arguments.dup
      next_args.delete(:page)
      next_args.delete(:page_size)
      yield(object, next_args, arguments)
    end

    def after_resolve(value:, memo:, **rest)
      value.page(memo[:page] || 1).per(memo[:page_size] || 25)
    end
  end

  module KaminariPagination
    def kaminari_pagination_type
      @pagination_type ||= define_pagination
    end

    private

    def define_pagination
      type_name = "#{graphql_name}KaminariPagination"
      source_type = self

      Class.new(GraphQL::Schema::Object) do
        graphql_name type_name

        field :nodes, [source_type], null: false
        field :page_info, Paginations::KaminariPageInfo, null: false

        def nodes
          object
        end

        def page_info
          object
        end
      end
    end
  end
end