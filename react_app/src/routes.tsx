import { RouteObject } from "react-router-dom";
import Login from './pages/Login/Login'
import ErrorPage from './pages/ErrorPage'
import Register from "./pages/Register";
import Home from "./pages/Home";

export const routes: RouteObject[]  = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
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