import { gql } from '@apollo/client'

export default {
  core: gql`
    fragment CoreUserFields on User {
      id
      fullName
      email
      phone
    }
  `
}
