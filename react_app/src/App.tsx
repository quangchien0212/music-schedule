import './App.css'
import { withApollo } from './lib/apollo'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from './routes'

function App() {
  const router = createBrowserRouter(routes)

  return (
    <RouterProvider router={router} />
  )
}

export default withApollo(App)
