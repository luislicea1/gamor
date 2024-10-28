import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Root = lazy(() => import("../components/Root/Root"));
const Login = lazy(() => import("../pages/Login"));
const Principal = lazy(() => import("../pages/Principal"));
const CreateAccount = lazy(() => import("../pages/CreateAccount"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "",
        element: <Principal></Principal>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/create-account",
        element: <CreateAccount></CreateAccount>,
      },
    ],
  },
]);
