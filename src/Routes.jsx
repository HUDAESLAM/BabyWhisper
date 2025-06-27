import { createBrowserRouter, Navigate } from "react-router";
import Landing from "./components/Landing page/Landing";
import Login from "./components/Login/Login";
import ForgetPassword from "./components/forgetPassword/ForgetPassword";
import ResetPassword from "./components/resetPass/ResetPassword";
import SignUp from "./components/sign-up/SignUp";
import AboutUs from "./components/about/AboutUs";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import Resources from "./components/Resourses/Resources";
import Rating from "./components/Rating/Rating";
import MainCry from "./components/CryDetection/mainCry/MainCry";
import RecordCry from "./components/CryDetection/RecordCry/CryUpload";
import UploadPage from "./components/CryDetection/UploadPage//PageUpload";
import CryResult from "./components/CryDetection/CryResult/CryResult";
import ChatBot from "./components/Chat/ChatBot/ChatBot";
import ChatBox from "./components/Chat/ChatBox/ChatBox";
import Profile from "./components/profile/Profile";
import ProfileEdit from "./components/profileEdit/ProfileEdit";
// import ProfileEditForm from "./components/profileEditForm/ProfileEditForm";
import Logout from "./components/logout/Logout";
import Schedule from "./components/schedule/Schedule";
import Loading from "./components/loadingScreen/Loading";
import Notification from "./components/Notification/notification";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="home" replace />,
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
    path: "sign-up",
    element: <SignUp />,
  },
  {
    path: "about",
    element: <AboutUs />,
  },
  {
    path: "resources",
    element: <Resources />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "rating",
    element: <Rating />,
  },
  {
    path: "maincry",
    element: <MainCry />,
  },
  {
    path: "recordCry",
    element: <RecordCry />,
  },
  {
    path: "uploadPage",
    element: <UploadPage />,
  },
  {
    path: "cryResult",
    element: <CryResult />,
  },
  {
    path: "chatBot",
    element: <ChatBot />,
  },
  {
    path: "ChatBox",
    element: <ChatBox />,
  },
  {
    path: "logout",
    element: <Logout />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "profileEdit",
    element: <ProfileEdit />,
  },
  {
    path: "schedule",
    element: <Schedule />,
  },
  {
    path:"loading",
    element:<Loading/>
  },
  {
    path:"notification",
    element:<Notification/>
  }
]);

export default router;
