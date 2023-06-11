import React, { useState } from "react";
import useClasses from "../../Hooks/useClasses";
import Swal from "sweetalert2";

const ManageClasses = () => {
  
  const [classes] = useClasses();
  console.log(classes);

  const handleDeny =(singleClass)=>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
        //   Swal.fire(
        //     'Deleted!',
        //     'Your file has been deleted.',
        //     'success'
        //   )
          
         
        }
      })
  }
  return (
    <div>
      <div>
        <h2 className="text-3xl text-center font-bold my-12">Manage Classes</h2>
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
              <th>Approve</th>
              <th>Deny</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
           {
            classes.map((singleClass, index) => <tr key={singleClass._id}>
              <td>
              {index + 1}
              </td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={singleClass.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                {singleClass.className}
              </td>
              <td>{singleClass.displayName}</td>
              <td>{singleClass.email}</td>
              <td>{singleClass.seats}</td>
              <td>{singleClass.price}</td>
              <th>  
                <button className="btn btn-ghost text-md bg-green-800/30 btn-xs">Approve
                </button>
                </th>
              <th>
                <button onClick={()=>handleDeny(singleClass)} className="btn btn-ghost text-md bg-red-800/30 btn-xs">Deny</button>
              </th>
              <th>
                <button className="btn btn-ghost text-md bg-blue-800/30 btn-xs">FeedBack</button>
              </th>
            </tr>    

                )
           } 
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
