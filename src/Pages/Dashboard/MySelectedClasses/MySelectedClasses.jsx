import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import SelectedClass from '../SelectedClass/SelectedClass';


const MySelectedClasses = () => {
   const {user} = useAuth()
   const [mySelectedClasses, setMySelectedClasses] = useState([])
   useEffect(() => {
       fetch(`http://localhost:5000/carts/${user?.email}`)
         .then((res) => res.json())
         .then((data) => {
            setMySelectedClasses(data);
          
         });
     }, [user]);
    return (
        <div className="shadow-xl shadow-blue-500/50 container rounded-md my-16 p-16 mx-auto">
        <div className="bg-img rounded-md">
        <div className="bg-sky-700/70 rounded-md p-16 grid grid-cols-1 md:grid-cols-3 gap-6">
           {mySelectedClasses.map(mySelectedClass => <SelectedClass key={mySelectedClass._id} mySelectedClass={mySelectedClass}></SelectedClass> )}
         </div>
        </div>
       </div>
    );
};

export default MySelectedClasses;