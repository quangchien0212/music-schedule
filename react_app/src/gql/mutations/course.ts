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

export const UPDATE_COURSE = gql`
  ${courseFragments.core}
  mutation UpdateCourse($input: UpdateCourseInput!) {
    updateCourse(input: $input) {
      course {
        ...CoreCourseFields
      }
      errors
      success
    }
  }
`
