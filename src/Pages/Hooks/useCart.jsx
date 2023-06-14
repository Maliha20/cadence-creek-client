import React from 'react';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useCart = () => {
  const { user } = useAuth();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ['cart', user?.email],
    queryFn: async () => {
      if (user?.email) {
        const res = await fetch(`https://cadence-creek-server.vercel.app/carts?email=${user.email}`);
        return res.json();
      }
      return [];
    },
  });

  return [cart, refetch];
};

export default useCart;
