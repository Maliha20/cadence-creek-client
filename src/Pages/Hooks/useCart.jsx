import React from 'react';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useCart = () => {
    const {user} = useAuth();
 const { refetch, data: cart=[] }= useQuery({
    queryKey: ['cart', user?.email],
    queryFn: async()=>{
        const res= await fetch(`http://localhost:5000/carts?email=${user.email}`)
        return res.json()
    },
   
 })
 return [cart, refetch]
};

export default useCart;