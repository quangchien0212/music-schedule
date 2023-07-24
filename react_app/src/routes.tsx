import { RouteObject } from 'react-router-dom'
import Login from './pages/Login/Login'
import ErrorPage from './pages/ErrorPage'
import Register from './pages/Register'
import Dashboard from './pages/DashBoard'
import Courses from './pages/Courses'
import Teachers from './pages/Teachers'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Dashboard />,
    errorElement: <ErrorPage />
  },
  {
    path: '/courses',
    element: <Courses />,
    errorElement: <ErrorPage />
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <ErrorPage />
  },
  {
    path: '/teachers',
    element: <Teachers />,
    errorElement: <ErrorPage />
  },
]
