import React from 'react';
import useInstructor from '../Pages/Hooks/useInstructor';
import { useLocation } from 'react-router-dom';
import useAuth from '../Pages/Hooks/useAuth';

const InstructorRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [isInstructor, isInstructorLoading] = useInstructor()
    const location = useLocation();
    if(loading || isInstructorLoading){
        return <div className='mx-auto flex flex-col justify-center space-y-4 my-auto'>
        <progress className="progress progress-info-700 w-56"></progress>
        <progress className="progress progress-blue-700 w-56"></progress>
        <progress className="progress progress-info-700 w-56"></progress>
        <progress className="progress progress-blue-700 w-56"></progress>
        </div>
    }
    if(user && isInstructor){
        return children ;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};


export default InstructorRoute;