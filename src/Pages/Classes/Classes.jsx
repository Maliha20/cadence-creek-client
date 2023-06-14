import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import './Classes.css'
import Class from "../Class/Class";
const Classes = () => {
  const approvedClasses = useLoaderData();
  return (
    <div className="shadow-xl shadow-blue-500/50 container rounded-md my-16 p-16 mx-auto">
     <div className="bg-img rounded-md">
     <div className="bg-sky-700/70 rounded-md p-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {approvedClasses.map(approvedClass => <Class key={approvedClass._id} approvedClass={approvedClass}></Class> )}
      </div>
     </div>
    </div>
  );
};

export default Classes;
