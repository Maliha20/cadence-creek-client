import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';



const MyClasses = () => {
    const {user} = useAuth();
    const [myclasses, setMyClasses] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/classes/${user?.email}`)
          .then((res) => res.json())
          .then((data) => {
          setMyClasses(data);
           
          });
      }, [user]);
    
    
    return (
        <div>
      <div>
        <h2 className="text-3xl text-center font-bold my-12">My Classes</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead className="text-blue-900 font-semibold text-xl bg-base-200">
            <tr>
              <th>
                #
              </th>
              <th>Images</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Feedback</th>
              <th>Students Enrolled</th>
            </tr>
          </thead>
          <tbody>
           {
            myclasses.map((myClass, index) => <tr key={myClass._id}>
              <td>
              {index + 1}
              </td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={myClass.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                {myClass.className}
              </td>
              <td>{myClass.displayName}</td>
              <td>{myClass.email}</td>
              <td>{myClass.seats}</td>
              <td>{myClass.price}</td>
              <td>{myClass.status}</td>
              <td>{myClass.feedback}</td>
              <td>{myClass.feedback}</td>
              </tr>    

                )
           } 
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default MyClasses;