import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import RootLayout from "../layout/RootLayout";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/Home/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index:true,
            Component:Home
        },{
            path: 'register',
            Component: Register
        },{
          path: 'signIn',
          Component: SignIn
        },{
          path:'jobs/:id',
          Component: JobDetails
        }
    ]
  },
]);


export default router;