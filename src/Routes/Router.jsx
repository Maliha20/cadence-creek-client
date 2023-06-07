import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import LoginLayout from "../Layouts/LoginLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";



const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element:<Home></Home>
        }
      ]
    },
    {
        path:"/login",
        element:<LoginLayout></LoginLayout>,
        children: [
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/login/register",
                element:<Register></Register>
            }
        ]
    }
]);

export default router