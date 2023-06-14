import React from 'react';
import { app } from '../../Firebase/firebase.config';
import useAuth from '../Hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import useCart from '../Hooks/useCart';

const Class = ({approvedClass}) => {
    const {user} = useAuth() 
    const [, refetch]= useCart()
  const navigate=useNavigate()
  const location = useLocation();
    const {_id, image, className, price, seats,} = approvedClass;

    const handleSelectClass=(approvedClass)=>{
        console.log(approvedClass)
        
     if(user && user?.email){
        const courseItems= {courseId: _id,image, className,price, seats,email:user?.email}
        fetch('http://localhost:5000/carts',{
          method: 'POST',
         headers:{
          'content-type' : 'application/json'
         },
         body: JSON.stringify(courseItems)
        })
        .then(res=>res.json())
        .then(data =>{
            if(data.insertedId){
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `Course selected successfully`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        }
        
        )
     }
     else{
        Swal.fire({
            title: 'Login',
            text: "If Login to continue",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'okay'
          }).then((result)=>{
            if(result.isConfirmed){
                navigate('/login',{state:{from: location}})
            }
          })
     }
    }
    return (
        <div
            className="card w-96 p-6 bg-base-100 shadow-xl"
          >
            <figure>
              <img
                className="rounded-lg img-size border-8 border-sky-600/30"
                src={image}
                alt="instructor"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl font-bold text-blue-900">
                Name of the class: {className}
              </h2>
              <p className="font-semibold text-sky-900 text-lg">
                Seats Available: {seats}
              </p>
              <p className="font-semibold text-sky-900 text-lg">
                Cost: ${price}
              </p>
              <div className="card-actions justify-start">
                <Link to="/">
                  <button onClick={()=>handleSelectClass(approvedClass)} className="btn btn-info text-lg hover:text-blue-200 hover:bg-sky-900">
                    Select
                  </button>
                </Link>
              </div>
            </div>
          </div>
    );
};

export default Class;