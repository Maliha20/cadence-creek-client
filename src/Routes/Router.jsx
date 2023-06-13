import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import LoginLayout from "../Layouts/LoginLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Layouts/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import AddAClass from "../Pages/Dashboard/AddAClass/AddAClass";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import ClassbyInstructor from "../Pages/ClassesbyInstructor/ClassesbyInstructor";





const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element:<Home></Home>
        },
        {
            path: "/instructors",
            element: <PrivateRoute><Instructors /></PrivateRoute>,
            loader: () => fetch('http://localhost:5000/user/instructor')
          },
          {
            path: "/classesbyinstructor",
            element: <PrivateRoute><ClassbyInstructor /></PrivateRoute>
          },
        {
            path: "/classes",
            element:<Classes></Classes>,
            loader:()=>fetch('http://localhost:5000/approvedClasses')
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
    },
    {
        path: "dashboard",
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path:'home',
                element:<AdminHome></AdminHome>
            },
            {
                path:'manageuser',
                element:<AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path:'manageclasses',
                element:<AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            {
                path: 'addaclass',
                element: <InstructorRoute><AddAClass></AddAClass></InstructorRoute>
            },
            {
                path: 'myclasses',
                element:<InstructorRoute><MyClasses></MyClasses></InstructorRoute>
               
            }
        ]
    }
]);

export default router