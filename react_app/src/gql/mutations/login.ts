import { gql } from '@apollo/client'

type LoginInput = {
  email: string
  password: string
}

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
