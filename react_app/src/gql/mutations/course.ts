import { gql } from '@apollo/client'
import courseFragments from '../fragments/course'

export const CREATE_COURSE = gql`
  ${courseFragments.core}
  mutation CreateCourse($input: CreateCourseInput!) {
    createCourse(input: $input) {
      course {
        ...CoreCourseFields
      }
      errors
      success
    }
  }
`
