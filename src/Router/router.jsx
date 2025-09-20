import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import RootLayout from "../layout/RootLayout";
import SignIn from "../pages/SignIn/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index:true,
            Component:Home
        },{
            path: '/register',
            Component: Register
        },{
          path: '/signIn',
          Component: SignIn
        }
    ]
  },
]);


export default router;