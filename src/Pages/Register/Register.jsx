import React from 'react';
import { Link } from 'react-router-dom';
import loginLogo from '../../assets/loginpic.png';

const Register = () => {
    return (
        <div className=" my-16 hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row rounded-lg  shadow-2xl  shadow-blue-500/50">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-blue-900">SignUp now!</h1>
            <img src={loginLogo} alt="" />
          </div>
          <div className="card flex-shrink-0 md:w-1/2 w-full ">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm Your Password"
                  name="confirm"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p className="text-lg">Already Have An Account? <Link className="text-blue-700" to="/login">Login</Link></p>
  
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;