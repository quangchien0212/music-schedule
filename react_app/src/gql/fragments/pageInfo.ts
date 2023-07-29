import { gql } from '@apollo/client'

export default {
  core: gql`
    fragment CorePageInfo on PageInfo {
      hasNextPage
      page
      pageSize
    }
  `
}