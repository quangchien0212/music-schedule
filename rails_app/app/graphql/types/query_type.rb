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
  end
end
