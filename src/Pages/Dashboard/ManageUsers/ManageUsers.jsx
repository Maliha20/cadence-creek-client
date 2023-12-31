import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FaUserLock, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';
const ManageUsers = () => {
  const { loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [disabled, setDisabled] = useState(false);
  const { data: users = [], refetch } = useQuery(
    ['users'],
    async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    },
    {
      enabled: !loading,
    }
  );
  

    const handleAdmin=(user)=>{
      fetch(`https://cadence-creek-server.vercel.app/users/admin/${user._id}`,{
        method: "PATCH",
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.modifiedCount){
          refetch()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${user.name} has been set as Admin succesfully`,
            showConfirmButton: false,
            timer: 1500
          })
        }
        setDisabled(true)
      })
      
      
    }
    const handleInstructor=(user)=>{
      fetch(`https://cadence-creek-server.vercel.app/users/instructor/${user._id}`,{
        method: "PATCH",
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.modifiedCount){
          refetch()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${user.name} has been set as instructor succesfully`,
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    }

    return (
        <div className='w-full container mx-auto'>
           <h2 className='my-12 text-3xl text-blue-900 text-center font-bold'>Total Users: {users.length}</h2>
           <div className="overflow-x-auto">
  <table className="table table-zebra rounded">
    {/* head */}
    <thead className='bg-blue-100'>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Admin</th>
        <th>Instructor</th>
      </tr>
    </thead>
    <tbody>
     {
       users.map((user,index)=><tr key={user._id}>
        <th>{index+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.role === "admin" ? "admin" :
         <button onClick={()=>handleAdmin(user)} disable={disabled} className='btn btn-ghost bg-blue-100'>
         <FaUserLock></FaUserLock>Admin
        </button>}</td>
        <td>{user.role === "instructor" ? "instructor" :
         <button onClick={()=>handleInstructor(user)} disable ={disabled} className='btn btn-ghost bg-blue-100'>
         <FaUserShield></FaUserShield>Instructor
        </button>}</td>
        
      </tr>)
     }
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageUsers;