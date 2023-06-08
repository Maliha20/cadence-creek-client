import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import loginLogo from "../../assets/loginpic.png";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, profileUpdate, profileInfo,GoogleSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [display, setDisplay] = useState(false);
  // const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>{
    const { email, password, name,photo } = data;
    createUser(email, password, name, photo)
    .then(result=>{
      const registeredUser = result.user;
      console.log(registeredUser)
      profileUpdate(name, photo).then(() => {
        profileInfo(email, name, photo);
      });
    })
  }
const handleGoogleLogin=()=>{
  GoogleSignIn()
  googleLogin()
  .then(result=>{
    const googleUser =result.user;
    console.log(googleUser)
    // navigate(from,{replace : true})
    setSuccess('successfuly logged in')
    setError('')
  })
  .catch(error=>{
    console.error()
    setError(error.message)
    setSuccess('')
  })
}
  return (
    <div className=" my-16 hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row rounded-lg  shadow-2xl  shadow-blue-500/50">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-blue-900">SignUp now!</h1>
          <img src={loginLogo} alt="" />
        </div>
        <div className="card flex-shrink-0 md:w-1/2 w-full ">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="url"
                  placeholder="Insert Photo Url"
                  {...register("photo")}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name")}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <p className="text-red-600 mt-2" role="alert">
                    Email is required
                  </p>
                )}
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Gender</span>
                </label>
                <select
                  className="input input-bordered w-full p-1 rounded-md"
                  {...register("gender")}
                >
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">other</option>
                </select>
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
                  required
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm Your Password"
                  n
                  {...register("confirm")}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input  className="btn btn-primary" type="submit" value="Sign Up" />
                
              </div>
                <p className="text-lg">Login with<button onClick={handleGoogleLogin} className="btn btn-link text-blue-700">Google</button></p>
              <p className="text-lg">
                Already Have An Account?{" "}
                <Link className="text-blue-700" to="/login">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
