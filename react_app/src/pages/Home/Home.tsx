import React from 'react'
import { gql, useQuery } from '@apollo/client'

type Props = {}

const TEST_QUERY = gql`
  query TestField {
    testField
  }
`
const Home: React.FC<Props> = (props) => {
  const { data, loading } = useQuery(TEST_QUERY)
  console.log(data)
  return (
    <div>Home</div>
  )
}

export default Home