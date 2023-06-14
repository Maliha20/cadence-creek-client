import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginLogo from "../../assets/loginpic.png";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../SocialLogin/SocialLogin";
import useAuth from "../Hooks/useAuth";

const img_hosting_token = import.meta.env.VITE_img_upload_token;
const Register = () => {
  const { createUser, profileUpdate, profileInfo } = useAuth();
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();
  const location =useLocation()
  const from = location?.state?.from?.pathname || '/'

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { email, password, name, role } = data;

          createUser(email, password, name, imgURL, role)
            .then((result) => {
              const registeredUser = result.user;
              console.log(registeredUser);

              profileUpdate(name, imgURL)
                .then(() => {
                  const user = {
                    name: name,
                    email: email,
                    password: password,
                    photo: imgURL,
                    role: role,
                  };

                  fetch("http://localhost:5000/users", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user),
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      if (data.insertedId) {
                        navigate(from,{replace : true});
                      }
                    })
                    

                  profileInfo(email, name, imgURL);
                })
               
            })
            
        } 
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

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
                <span className="label-text font-bold">Image</span>
              </label>
              <input
                {...register("image", { required: true })}
                type="file"
                className="file-input file-input-bordered file-input-primary w-full"
              />
              {errors.image?.type === "required" && (
                <p className="text-red-600 mt-2" role="alert">
                  insert image
                </p>
              )}
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
                  <span className="label-text">Role</span>
                </label>
                <input
                  defaultValue={"student"}
                  type="text"
                  placeholder="role"
                  {...register("role")}
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
                  <span className="text-red-600" role="alert">
                    Password is required
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600" role="alert">
                    Make sure password has at least one uppercase and one
                    special character
                  </span>
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
                   {errors.password === "confirm" && (
                  <span className="text-red-600" role="alert">
                    Make sure password has at least one uppercase and one
                    special character
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              <p className="text-lg">
                Already Have An Account?{" "}
                <Link className="text-blue-700" to="/login">
                  Login
                </Link>
              </p>
              <SocialLogin></SocialLogin>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
