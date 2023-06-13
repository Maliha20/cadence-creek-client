
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Pages/Hooks/useAuth';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation();
    if(loading){
        return <div className='mx-auto flex flex-col items-center justify-center space-y-4 my-auto'>
        <span className="loading loading-spinner text-info"></span>
        <span className="loading loading-spinner text-primary"></span>
        <span className="loading loading-spinner text-info"></span>
        <span className="loading loading-spinner text-primary"></span>
        
        </div>
     
     
    }
    if(user){
        return children ;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;