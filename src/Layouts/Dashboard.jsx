import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaBook, FaHome, FaShoppingBasket, FaUser, FaWallet } from "react-icons/fa";
import useAdmin from "../Pages/Hooks/useAdmin";
import useInstructor from "../Pages/Hooks/useInstructor";
import useCart from "../Pages/Hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart()
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
              <NavLink className="text-xl font-semibold text-blue-900 hover:bg-blue-900 hover:text-blue-100" to="/dashboard/home"><FaHome></FaHome>My Home</NavLink>
            </li>
              <li>
              <NavLink className="text-xl font-semibold text-blue-900 hover:bg-blue-900 hover:text-blue-100" to="/dashboard/manageclasses"><FaBook></FaBook>Manage Classes</NavLink>
            </li>
              <li>
              <NavLink className="text-xl font-semibold text-blue-900 hover:bg-blue-900 hover:text-blue-100" to="/dashboard/manageuser"><FaUser></FaUser>Manage Users</NavLink>
            </li>
            </> 
            : isInstructor ?
             <>
             <li>
              <NavLink className="text-xl font-semibold text-blue-900 hover:bg-blue-900 hover:text-blue-100" to="/dashboard/home">
              <FaHome></FaHome>My Home</NavLink>
            </li>
            <li>
              <NavLink className="text-xl font-semibold text-blue-900 hover:bg-blue-900 hover:text-blue-100" to="/dashboard/addaclass">
              <FaBook></FaBook>Add a class</NavLink>
              <NavLink className="text-xl font-semibold text-blue-900 hover:bg-blue-900 hover:text-blue-100" to="/dashboard/myclasses">
              <FaBook></FaBook>My Classes</NavLink>
            </li>
            </>
            :
            <>
            <li>
             <NavLink className=" text-xl font-semibold text-blue-900 hover:bg-blue-900 hover:text-blue-100" to="/dashboard/home">
             <FaHome></FaHome>My Home</NavLink>
           </li>
           <li>
             <NavLink className="text-xl font-semibold text-blue-900 hover:bg-blue-900 hover:text-blue-100" to="/dashboard/myCart">
             <FaShoppingBasket />My Cart
             <span className="badge px-3 badge-info">+ {cart?.length || 0}</span>
             </NavLink>
           </li>
           <li>
             <NavLink className="text-xl font-semibold text-blue-900 hover:bg-blue-900 hover:text-blue-100" to="/dashboard/home">
             <FaWallet />My Payment History</NavLink>
           </li>
           </>
           }
            <div className="divider text-blue-900"></div>
            <li>
              <NavLink className="text-center text-3xl font-semibold text-blue-900 hover:bg-blue-900 hover:text-blue-100" to="/">
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
