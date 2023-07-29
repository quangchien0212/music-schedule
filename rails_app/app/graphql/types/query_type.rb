module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField
    include ::Contexts::User

    field :courses, [Types::CourseType], null: false
    def courses
      Course.all
    end

    field :teachers, [Types::TeacherType], null: false
    def teachers
      teachers = Teacher.all

      teachers
    end

    field :users_can_be_teacher, Types::UserType.kaminari_pagination_type, null: false, extensions: [Paginations::KaminariExtension] do
      argument :keyword, String, required: false
    end
    def users_can_be_teacher(keyword: nil)
      rel = User.can_be_teacher
      rel = rel.with_name(keyword) if keyword.present?

      rel
    end
  end
end
