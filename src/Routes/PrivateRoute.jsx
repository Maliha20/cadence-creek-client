import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    if(loading){
        return <div className='mx-auto flex flex-col justify-center space-y-4 my-auto'>
        <progress className="progress progress-info-700 w-56"></progress>
        <progress className="progress progress-blue-700 w-56"></progress>
        <progress className="progress progress-info-700 w-56"></progress>
        <progress className="progress progress-blue-700 w-56"></progress>
        </div>
    }
    if(user){
        return children ;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;