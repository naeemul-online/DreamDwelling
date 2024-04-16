import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";


const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();
    console.log(location)
  
    if(loading){
        return <div className="text-3xl text-center"><span className="loading loading-bars loading-lg"></span></div>
    }
    // return 
    
    if(!user){
        return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
    } 
    return <div>
        {children}
    </div>

    // return  <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;