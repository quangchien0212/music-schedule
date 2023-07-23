module Types
  class CourseType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :description, String, null: true
    field :status, String, null: false
    field :level, String, null: false
    field :lessons_to_complete, Integer, null: false
    field :price, Integer, null: true
  end
end