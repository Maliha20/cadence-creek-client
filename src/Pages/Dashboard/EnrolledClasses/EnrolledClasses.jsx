import React, { useEffect, useState } from 'react';
import Enrolled from '../Enrolled/Enrolled';
import useAuth from '../../Hooks/useAuth';

const EnrolledClasses = () => {
    const {user} = useAuth()
    const [myEnrolledClasses, setMyEnrolledClasses] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/payments/${user?.email}`)
          .then((res) => res.json())
          .then((data) => {
            setMyEnrolledClasses(data);
           
          });
      }, [user]);
    return (
        <div className="shadow-xl shadow-blue-500/50 container rounded-md my-16 p-16 mx-auto">
        <div className="bg-img rounded-md">
        <div className="bg-sky-700/70 rounded-md p-16 grid grid-cols-1 md:grid-cols-3 gap-6">
           {myEnrolledClasses.map(myEnrolledClass => <Enrolled key={myEnrolledClass._id} myEnrolledClass={myEnrolledClass}></Enrolled> )}
         </div>
        </div>
       </div>
    );
};

export default EnrolledClasses;