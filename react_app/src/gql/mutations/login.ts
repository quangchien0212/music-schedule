import { gql } from '@apollo/client'

export const LOGIN = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      errors
      token
      user {
        id
        fullName
        email
      }
    }
  }
`
