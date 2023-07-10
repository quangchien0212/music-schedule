import { gql, useQuery } from '@apollo/client'
import './App.css'
import { withApollo } from './lib/apollo'

const TEST_QUERY = gql`
  query TestField {
    testField
  }
`;
function App() {
  const { data, loading } = useQuery(TEST_QUERY)
  console.log(data)

  return (
    <>
    </>
  )
}

export default withApollo(App)
