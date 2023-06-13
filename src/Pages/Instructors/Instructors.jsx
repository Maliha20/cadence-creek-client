import React from "react";
import useAuth from "../Hooks/useAuth";
import { useLoaderData } from "react-router-dom";

const img_hosting_token = import.meta.env.VITE_img_upload_token;
console.log(img_hosting_token);
const Instructors = () => {
  const instructors = useLoaderData();

  console.log(instructors);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {instructors.map((instructor) => (
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={instructor.photo} alt="instructor" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{instructor.name}</h2>
            <p>{instructor.email}</p>
            <div className="card-actions justify-start">
              <button className="btn btn-primary">See Classes</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Instructors;
