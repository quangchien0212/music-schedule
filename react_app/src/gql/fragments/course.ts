import { gql } from '@apollo/client'

export default {
  core: gql`
    fragment CoreCourseFields on Course {
      id
      name
      description
      price
      lessonsToComplete
      status
      level
    }
  `
}