import React, { useState } from "react";
import loginLogo from "../../assets/loginpic.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import SocialLogin from "../SocialLogin/SocialLogin";
import useAuth from "../Hooks/useAuth";
const Login = () => {
  const {userSignIn} = useAuth()
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/'
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    userSignIn(data.email, data.password)
    .then(result=>{
      const loggedUser = result.user;
      console.log(loggedUser)
      navigate(from,{replace : true})
      setSuccess('You have successfully signed in')
      setError("")
      
      
    })
    .catch(error=>{
      console.log(error)
      setError(error.message)
      setSuccess("")
    }) 
  };
  
  return (
    <div className="my-16 hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row rounded-lg  shadow-2xl  shadow-blue-500/50">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-blue-900 ">Login now!</h1>
          <img src={loginLogo} alt="" />
        </div>
        <div className="card flex-shrink-0 md:w-1/2 w-full">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                  role="alert"
                />
                {errors.email && (
                  <p className="text-red-600 mt-2" role="alert">
                    Email is required
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                   type={display ? "text" : "password"}
                  placeholder="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                  })}
                  className="input input-bordered"
                  role="alert"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-600"  role="alert">Password is required</span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600"
                   role="alert">Make sure password has at least one uppercase and one special character</span>
                )}
                
                <p onClick={() => setDisplay(!display)}>
                  {display ? (
                    <FaEyeSlash className="text-blue-950"></FaEyeSlash>
                  ) : (
                    <FaEye className="text-blue-950"></FaEye>
                  )}
                </p>
              </div>
            <p className="my-2 text-green-500 font-semibold">{success}</p>
            <p className="text-red-500 font-semibold">{error}</p>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p className="text-lg">Don't Have An Account?<Link className="text-blue-700" to="/login/register">Register</Link></p>
            </form>
            <SocialLogin></SocialLogin>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
