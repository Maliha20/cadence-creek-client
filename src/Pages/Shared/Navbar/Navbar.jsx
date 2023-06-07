import React from "react";
import logo from '../../../assets/logo.png'
import { Link } from "react-router-dom";
const Navbar = () => {
    const navLists = <>
           <li className="hover:text-blue-900 ">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-blue-900 ">
            <Link>Classes</Link>
          </li>
          <li className="hover:text-blue-900 ">
            <Link>Instructors</Link>
          </li>
          <li className="hover:text-blue-900 ">
            <Link>Dashboard</Link>
          </li>
    </>
  return (
    <div className="navbar bg-blue-400/70">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52"
          >
          {navLists}
          
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
            <img className="md:w-56 w-36 h-28 md:h-36 md:mt-4" src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-2xl text-white font-semibold md:mt-12 ">
        {navLists}
        </ul>
      </div>
      <div className="navbar-end md:mr-5 md:mt-12">

        <Link to="/login"><a className="btn btn-ghost px-1 md:px-5 text-white bg-blue-900">Login</a></Link>
      </div>
    </div>
  );
};

export default Navbar;
