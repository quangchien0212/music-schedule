module Types
  class MutationType < Types::BaseObject
    field :login, mutation: Mutations::Login
    field :add_user, mutation: Mutations::AddUser
    field :create_course, mutation: Mutations::CreateCourse
    field :update_course, mutation: Mutations::UpdateCourse
    field :delete_course, mutation: Mutations::DeleteCourse
  end
end
