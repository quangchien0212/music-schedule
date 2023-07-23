type CourseStatus = 'active'
type CourseLevel = 'beginner'

interface Course {
  id: string
  name: string
  description: string
  price?: number
  status: CourseStatus
  lessonsToComplete: number
  level: CourseLevel
}
