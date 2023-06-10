import React, { useContext, useEffect, useState } from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme")? localStorage.getItem("theme") : "light")

  useEffect(()=>{
    localStorage.setItem("theme",theme)
    const localTheme = localStorage.getItem("theme")
    document.querySelector("html").setAttribute("data-theme",localTheme)
  },[theme])
  // theme
  const handleToggle=(e)=>{
    if(e.target.checked){
      setTheme("dark")
    }
    else{
      setTheme("light")
    }
  }


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
        <Link to="/classes" >Classes</Link>
      </li>
      <li className="hover:text-blue-900 ">
        <Link to="/instructors">Instructors</Link>
      </li>
      {
        user &&
         <li className="hover:text-blue-900 ">
        <Link to="/dashboard">Dashboard</Link>
      </li>
      }
    </>
  );
  return (
    <div className="navbar mb-12 md:flex items-center  bg-blue-400/70">
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
          <img className="md:w-56 w-36 h-28 md:h-36" src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-2xl text-white font-semibold md:mt-12 ">
          {navLists}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <details className="dropdown dropdown-end md:mr-5 md:mt-12">
            <summary className="btn btn-ghost">
              <img
                title={user.displayName}
                className="w-20 h-20 rounded-full border-8 border-blue-950"
                src={user.photoURL}
                alt=""
              />
            </summary>
            <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a>
                  <p
                    onClick={handleLogout}
                    className="btn btn-ghost px-1 md:px-5 text-white bg-blue-900"
                  >
                    Logout
                  </p>
                </a>
              </li>
              <li>
                <label className=" swap swap-rotate">
            
                  <input type="checkbox" defaultChecked={theme === 'light'}
                    onChange={handleToggle} />
                  
                  {/* sun icon */}
                  <svg
                    className="swap-on fill-current w-10 h-10"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>

                  {/* moon icon */}
                  <svg
                    className="swap-off fill-current w-10 h-10"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
              </li>
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
