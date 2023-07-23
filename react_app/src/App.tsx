import './App.css'
import { withApollo } from './lib/apollo'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from './routes'
import { ConfigProvider } from 'antd'
import enUS from 'antd/locale/en_US';

function App() {
  const router = createBrowserRouter(routes)

  return (
    <ConfigProvider locale={enUS}>
      <RouterProvider router={router} />
    </ConfigProvider>
  )
}

export default withApollo(App)
