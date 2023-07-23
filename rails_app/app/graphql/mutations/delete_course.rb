module Mutations
  class DeleteCourse < Mutations::BaseMutation
    argument :id, ID, required: true

    field :course, Types::CourseType, :null => true

    def resolve(id:)
      course = Course.find(id)

      if course.deletable? && course.destroy
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