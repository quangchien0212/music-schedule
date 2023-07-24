type TeacherGrade = 'grade_1' | 'grade_2' | 'grade_3' | 'grade_4' | 'grade_5' | 'grade_6' | 'grade_7' | 'grade_8' | 'grade_9'

interface Teacher {
  id: string
  fullName: string
  email: string
  grade: TeacherGrade
  phone: string
}