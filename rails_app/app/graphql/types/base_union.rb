module Types
  class BaseUnion < GraphQL::Schema::Union
    extend Paginations::KaminariPagination

    edge_type_class(Types::BaseEdge)
    connection_type_class(Types::BaseConnection)
  end
end
