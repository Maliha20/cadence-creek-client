import React from 'react';
import useAuth from '../Pages/Hooks/useAuth';
import useStudent from '../Pages/Hooks/useStudent';
import { Navigate, useLocation } from 'react-router-dom';

const StudentRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [isStudent, isStudentLoading] = useStudent()
    const location = useLocation();
    if(loading || isStudentLoading){
        return <div className='mx-auto flex flex-col justify-center space-y-4 my-auto'>
        <span className="loading loading-spinner text-info"></span>
        <span className="loading loading-spinner text-primary"></span>
        <span className="loading loading-spinner text-info"></span>
        <span className="loading loading-spinner text-primary"></span>
        </div>
    }
    if(user && isStudent){
        return children ;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default StudentRoute;