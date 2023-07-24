module Types
  class TeacherType < Types::UserType
    field :grade, String, null: false
  end
end