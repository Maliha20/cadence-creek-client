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
         <span className="loading loading-spinner text-info"></span>
        <span className="loading loading-spinner text-primary"></span>
        <span className="loading loading-spinner text-info"></span>
        <span className="loading loading-spinner text-primary"></span>
        </div>
    }
    if(user && isInstructor){
        return children ;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};


export default InstructorRoute;