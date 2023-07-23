import { gql } from '@apollo/client'

export const GET_COURSES = gql`
  query GetCourse {
    courses {
      id
      name
      description
      level
      lessonsToComplete
      price
      status
    }
  }
`
