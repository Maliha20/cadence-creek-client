import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };
  const navLists = (
    <>
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
  );
  return (
    <div className="navbar md:flex items-center  bg-blue-400/70">
      <div className="navbar-start mt-0">
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
          <img
            className="md:w-56 w-36 h-28 md:h-36"
            src={logo}
            alt=""
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-2xl text-white font-semibold md:mt-12 ">
          {navLists}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <details className="dropdown md:mr-5 md:mt-12">
          <summary className=" btn btn-ghost">
          <img title={user.displayName} className="w-20 h-20 rounded-full border-8 border-blue-950" src={user.photoURL} alt="" />
          </summary>
          <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
            <li><a>
             <p onClick={handleLogout} className="btn btn-ghost px-1 md:px-5 text-white bg-blue-900">
              Logout
            </p>
              </a></li>
            <li><a>Item 2</a></li>
          </ul>
        </details>
        ) : (
          <Link to="/login">
            <p className="btn btn-ghost md:mr-5 md:mt-12 px-1 md:px-5 text-white bg-blue-900">
              Login
            </p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
