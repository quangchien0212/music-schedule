import { gql } from '@apollo/client'
import teacherFragments from '../fragments/teacher'

export const GET_TEACHERS = gql`
  ${teacherFragments.core}
  query GetTeachers {
    teachers {
      ...CoreTeacherFields
    }
  }
`
