import { gql, useQuery } from '@apollo/client'
import './App.css'
import { withApollo } from './lib/apollo'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from './routes'

const TEST_QUERY = gql`
  query TestField {
    testField
  }
`
function App() {
  const { data, loading } = useQuery(TEST_QUERY)
  console.log(data)
  const router = createBrowserRouter(routes)

  return (
    <RouterProvider router={router} />
  )
}

export default withApollo(App)
