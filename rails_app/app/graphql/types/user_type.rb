module Types
  class UserType < Types::BaseObject
    field :full_name, String, null: false
    field :email, String, null: false
  end
end