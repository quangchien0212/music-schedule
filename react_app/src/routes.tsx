import { RouteObject } from "react-router-dom";
import Login from './pages/Login/Login'
import ErrorPage from './pages/ErrorPage'
import Register from "./pages/Register";

export const routes: RouteObject[]  = [
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <ErrorPage />,
  },
]