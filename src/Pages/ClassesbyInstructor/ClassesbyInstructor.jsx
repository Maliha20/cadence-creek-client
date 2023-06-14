import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';


const ClassbyInstructor = () => {
  const { user } = useAuth()
  const [myCourses, setMyCourses] = useState([]);

  useEffect(() => {
  
      fetch(`https://cadence-creek-server.vercel.app/classes/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setMyCourses(data);
        })
        
    
  }, [user]);

  return (
    <div className="bg-sky-700/50 p-16 grid grid-cols-1 md:grid-cols-3 gap-6">
      {myCourses.map((myCourse) => (
        <div key={myCourse._id} className="card w-96 p-6 bg-base-100 shadow-xl">
          <figure>
            <img className="rounded-lg img-size border-8 border-sky-600/30" src={myCourse.image} alt="instructor" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-bold text-blue-900">{myCourse.className}</h2>
            <p className="font-semibold text-sky-900 text-lg">{myCourse.seats}</p>
            <p className="font-semibold text-sky-900 text-lg">{myCourse.price}</p>
            <div className="card-actions justify-start">
              <Link to="/instructors">
                <button className="btn btn-info text-lg hover:text-blue-200 hover:bg-sky-900">Go back</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClassbyInstructor;