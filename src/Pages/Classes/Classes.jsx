import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import './Classes.css'
const Classes = () => {
  const approvedClasses = useLoaderData();
  console.log(approvedClasses);

  return (
    <div className="shadow-xl shadow-blue-500/50 container rounded-md my-16 p-16 mx-auto">
     <div className="bg-img rounded-md">
     <div className="bg-sky-700/70 rounded-md p-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {approvedClasses.map((approvedClass) => (
          <div
            className="card w-96 p-6 bg-base-100 shadow-xl"
            key={approvedClass._id}
          >
            <figure>
              <img
                className="rounded-lg img-size border-8 border-sky-600/30"
                src={approvedClass.image}
                alt="instructor"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl font-bold text-blue-900">
                {approvedClass.className}
              </h2>
              <p className="font-semibold text-sky-900 text-lg">
                {approvedClass.seats}
              </p>
              <p className="font-semibold text-sky-900 text-lg">
                {approvedClass.price}
              </p>
              <div className="card-actions justify-start">
                <Link to="/classesbyinstructor">
                  <button className="btn btn-info text-lg hover:text-blue-200 hover:bg-sky-900">
                    See Classes
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
     </div>
    </div>
  );
};

export default Classes;
