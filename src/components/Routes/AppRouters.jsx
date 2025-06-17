import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../../App";
import ErrorPage from "../pages/Error/ErrorPage";

import EntreDashboard from "../user/Entrepreunere/Dashboard/EntreDashboard";
// import EntrepreneurDashboard from "../pages/User/EntrepreneurDashboard";
import EntreProfile from "../user/Entrepreunere/Profile/EntreProfile";
import ProfileForm from "../user/Entrepreunere/ProfileForm/ProfileForm";
import ProjectForm from "../user/Entrepreunere/ProjectForm/ProjectForm";
import MyProjects from "../user/Entrepreunere/MyProject/MyProjects";
import ProjectDetails from "../user/Entrepreunere/ProjectDetails/ProjectDetails";
// import InvProfileForm from "../components/user/Investor/ProfileForm/InvProfileForm";
// import Invprofile from "../components/user/Investor/ProfilePage/Invprofile";
// import Feedback from "../components/user/Entrepreunere/Feedbacks/Feedback";



const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
 
  {
    path:"entreDashboard",
    element:<EntreDashboard/>,
    },

    {
      path:"entreprofile",
      element:<EntreProfile/>,
    },
  
    {
      path:"profileform",
      element:<ProfileForm/>,
    },
    {
      path:"projectform",
      element:<ProjectForm/>
    },
  
    {
      path:"/projectdetails/:project_id",
      element:<ProjectDetails />
    },
    {
      path:"myprojects",
      element:<MyProjects/>
    },
    // {
    //   path: "feedback",
    //   element: <Feedback/>,
    // },
    // {
    //   path: "messages",
    //   element: <Messages/>,
    // },
]);





const AppRouters = () => {
  return (
    <RouterProvider router={Router} />
  );
};

export default AppRouters;
