import React from 'react'
import { gql, useQuery } from '@apollo/client'
import Defaultlayout from '~/layouts/index'

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
    <Defaultlayout>
      <div>Dashboard</div>
    </Defaultlayout>
  )
}

export default Home
