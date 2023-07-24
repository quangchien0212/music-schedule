import { gql } from '@apollo/client'

export default {
  core: gql`
    fragment CoreTeacherFields on Teacher {
      id
      fullName
      email
      phone
      grade
    }
  `
}
