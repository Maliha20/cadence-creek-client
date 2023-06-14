import React from 'react';
import useCart from '../Hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyCart = () => {
    const [cart, refetch] =useCart();
    const totalCourses = cart.reduce((sum, course)=> course.price + sum, 0)


    const handleDelete = course =>{
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
             fetch(`http://localhost:5000/carts/${course._id}`,{
                method:`DELETE`
             })
             .then(res=> res.json())
             .then(data =>{
                if(data.deletedCount > 0){
                    refetch()
                    Swal.fire(
                            'Deleted!',
                            'Your order has been deleted.',
                            'success'
                          )
                }
             })
            }
          })
    }
    
    return (
       <div>
         <div className='uppercase font-semibold flex h-10 justify-evenly my-12'>
            <h2 className='text-3xl text-blue-800'>Total Courses: {cart.length}</h2>
            <h2 className='text-3xl text-blue-800'>Total Cost: ${totalCourses}</h2>
           <Link to='/dashboard/payment'><button className="btn btn-md btn-info">Pay</button></Link>
        </div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className='bg-sky-400/30 h-[100px] text-blue-900 text-2xl font-semibold'>
      <tr>
        <th>
         #
        </th>
        <th>course Image</th>
        <th>courseName</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {cart.map( (course, index) =>
         <tr className='h-[150px] text-xl text-blue-900' key={course._id}>
         <td>
          {index + 1}
         </td>
         <td>
           <div className="flex items-center space-x-3">
             <div className="avatar">
               <div className="mask mask-squircle w-24 h-24">
                 <img src={course.image} />
               </div>
             </div>
           </div>
         </td>
         <td className="font-bold">
         {course.className}
         </td>
         <td className='text-end'>
           ${course.price}
         </td>
         <td>
           <button onClick={()=>handleDelete(course)} className="btn btn-ghost bg-red-400/50 btn-lg"><FaTrashAlt></FaTrashAlt></button>
         </td>
       </tr>
     
        )}
    </tbody>
 
  </table>
</div>
       </div>
        
    );
};

export default MyCart;