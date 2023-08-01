import './App.css'
import { withApollo } from './lib/apollo'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from './routes'
import { withMui } from './lib/mui'

function App() {
  const router = createBrowserRouter(routes)

  return (
    <RouterProvider
      router={router}
    />
  )
}

export default withMui(withApollo(App))
