type CourseAttributes = Partial<Omit<Course, 'id'>>

type CreateCourseVars = CreateRecordVars<CourseAttributes>

type CreateCourseData = {
  createCourse: {
    course: Course
  } & MutationBaseData
}

type UpdateCourseVars = ModifyRecordVars<CourseAttributes>

type UpdateCourseData = {
  updateCourse: {
    course: Course
  } & MutationBaseData
}
