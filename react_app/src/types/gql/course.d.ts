type CourseAttributes = Partial<Omit<Course, 'id'>>

type CreateCourseVars = CreateRecordVars<CourseAttributes>

type CreateCourseData = {
  createCourse: {
    course: Course
  } & MutationBaseData
}
