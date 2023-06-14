import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import './Instructors.css'
const img_hosting_token = import.meta.env.VITE_img_upload_token;
console.log(img_hosting_token);
const Instructors = () => {
  const instructors = useLoaderData();
 

  console.log(instructors);
  return (
    <div className="shadow-xl shadow-blue-500/50 container rounded-md my-16 p-16 mx-auto">
    <div className=" bg-sky-700/50 p-16 grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {instructors.map((instructor) => (
        <div key={instructor._id} className="card w-96 p-6 bg-base-100 shadow-xl">
          <figure>
            <img className="rounded-lg img-size border-8 border-sky-600/30" src={instructor.photo} alt="instructor" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-bold text-blue-900">Instructor's Name: {instructor.name}</h2>
            <p className="font-semibold text-sky-900 text-lg">Instructor's Email:  {instructor.email}</p>
            <div className="card-actions justify-start">
              <Link to='/classesbyinstructor'><button className="btn btn-info text-lg hover:text-blue-200 hover:bg-sky-900">See Classes</button></Link>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Instructors;
