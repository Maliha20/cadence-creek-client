import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { FaBook, FaHome, FaUser } from "react-icons/fa";
import useAdmin from "../Pages/Hooks/useAdmin";
import useInstructor from "../Pages/Hooks/useInstructor";

const Dashboard = () => {

  //todo
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor()

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu py-4 w-80 h-full bg-blue-100">
           
           {
            isAdmin ? <>
                <li>
              <NavLink className="text-center text-xl font-semibold text-blue-900 hover:bg-blue-900 hover:text-blue-100" to="/dashboard/home"><FaHome></FaHome>Admin Home</NavLink>
            </li>
              <li>
              <NavLink className="text-center text-xl font-semibold text-blue-900 hover:bg-blue-900 hover:text-blue-100" to="/dashboard/manageclass"><FaBook></FaBook>Manage Classes</NavLink>
            </li>
              <li>
              <NavLink className="text-center text-xl font-semibold text-blue-900 hover:bg-blue-900 hover:text-blue-100" to="/dashboard/manageuser"><FaUser></FaUser>Manage Users</NavLink>
            </li>
            </> 
            : isInstructor ?
             <>
             <li>
              <NavLink className="text-center text-xl font-semibold text-blue-900 hover:bg-blue-900 hover:text-blue-100" to="/dashboard/home">
              <FaHome></FaHome>Instructor Home</NavLink>
            </li>
            <li>
              <NavLink className="text-center text-xl font-semibold text-blue-900 hover:bg-blue-900 hover:text-blue-100" to="/dashboard/addaclass">
              <FaBook></FaBook>Add a class</NavLink>
            </li>
            </>
            :
            <>
            <li>
             <NavLink className="text-center text-xl font-semibold text-blue-900 hover:bg-blue-900 hover:text-blue-100" to="/dashboard/home">
             <FaHome></FaHome>Student Home</NavLink>
           </li>
           <li>
             <NavLink className="text-center text-xl font-semibold text-blue-900 hover:bg-blue-900 hover:text-blue-100" to="/dashboard/home">
             <FaBook></FaBook>My Classes</NavLink>
           </li>
           </>
           }
            <div className="divider text-blue-900"></div>
            <li>
              <NavLink className="text-center text-xl font-semibold text-blue-900 hover:bg-blue-900 hover:text-blue-100" to="/">
              <FaHome></FaHome>Home</NavLink>
            </li>
            <div className="divider text-blue-900"></div>
            
           
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
