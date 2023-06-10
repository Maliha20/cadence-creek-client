import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Pages/Hooks/useAuth';
import useAdmin from '../Pages/Hooks/useAdmin';

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation();
    if(loading || isAdminLoading){
        return <div className='mx-auto flex flex-col justify-center space-y-4 my-auto'>
        <progress className="progress progress-info-700 w-56"></progress>
        <progress className="progress progress-blue-700 w-56"></progress>
        <progress className="progress progress-info-700 w-56"></progress>
        <progress className="progress progress-blue-700 w-56"></progress>
        </div>
    }
    if(user && isAdmin){
        return children ;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRoute;