module Mutations
  class UpdateCourse < Mutations::BaseMutation
    argument :id, ID, required: true
    argument :attributes, Types::CourseAttributes, required: true

    field :course, Types::CourseType, :null => true

    def resolve(id:, attributes:)
      course = Course.find(id)

      if course.update(attributes.to_h)
        return {
          course: course,
          success: true,
          errors: []
        }
      else
        return {
          success: false,
          errors: course.errors.full_messages
        }
      end
    end
  end
end