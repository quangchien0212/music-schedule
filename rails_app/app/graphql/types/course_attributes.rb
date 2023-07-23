module Types
  class CourseAttributes < Types::BaseInputObject
    argument :name, String, :required => false
    argument :description, String, :required => false
    argument :price, Integer, :required => false
    argument :lessons_to_complete, Integer, :required => false
    argument :status, String, :required => false
    argument :level, String, :required => false
  end
end
