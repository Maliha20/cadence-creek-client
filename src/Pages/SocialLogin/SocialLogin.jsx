import React from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const SocialLogin = () => {
    const {GoogleSignIn} = useAuth()
    const navigate = useNavigate()
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/'


    const handleGoogleLogin=()=>{
        GoogleSignIn()
        .then(result=>{
          const googleUser =result.user;
          console.log(googleUser)
         
          const user ={name:googleUser.displayName, email:googleUser.email, password:googleUser.password,photo:googleUser.photo  }
          fetch("http://localhost:5000/users",{
          method:"POST",
          headers:{
            "content-type":"application/json"
          },
          body: JSON.stringify(user)
          
        })
        .then(res=>res.json())
        .then(()=>{
            navigate(from,{replace : true})
        })
          
        })
      }
  return (
    <div>
      <div className="divider"></div>
      <button onClick={handleGoogleLogin} className="btn bg-indigo-100 text-blue-900">
        Google Login
       <FaGoogle className="text-green-800"></FaGoogle>
      </button>
    </div>
  );
};

export default SocialLogin;
