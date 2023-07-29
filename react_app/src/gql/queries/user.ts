import { gql } from '@apollo/client'
import userFragments from '../fragments/user'

export const GET_USER_FOR_TEACHER_SELECTING = gql`
  ${userFragments.core}
  query GetUserForTeacherSelecting($keyword: String) {
    usersCanBeTeacher(keyword: $keyword) {
      nodes {
        ...CoreUserFields
      }
    }
  }
`
