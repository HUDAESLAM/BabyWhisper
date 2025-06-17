import { createBrowserRouter, Navigate } from "react-router";
import DefaultLayout from "./components/DefaultLayout/DefaultLayout";
import Landing from "./components/Landing page/Landing";
import Login from "./components/Login/Login";
import ForgetPassword from "./components/forgetPassword/ForgetPassword";
import ResetPassword from "./components/resetPass/ResetPassword";
import SignUp from "./components/sign-up/SignUp";
import AboutUs from "./components/about/AboutUs"; 




const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        element: <Navigate to="home" replace />,
        index: true,
      },
      {
        path: "home",
        element: <Landing />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path:"sign-up",
        element:<SignUp />,
      },
      
    ],
  },
]);

export default router;
