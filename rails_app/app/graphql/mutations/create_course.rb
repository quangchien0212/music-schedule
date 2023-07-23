module Mutations
  class CreateCourse < Mutations::BaseMutation
    argument :attributes, Types::CourseAttributes, required: true

    field :course, Types::CourseType, :null => true

    def resolve(attributes:)
      course = Course.create(attributes.to_h)
      authorize course, :create?

      if course.valid?
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