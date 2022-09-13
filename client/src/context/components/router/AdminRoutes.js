import { Navigate, Outlet } from "react-router-dom";
import{ LOGIN  } from '../../config/routes/paths';
import { useAuthContext } from "../../authContext";


export default function AdminRoute(){
    const {isAuth} = useAuthContext();
    
    if(!isAuth){
        return <Navigate to={LOGIN} />
    }
    
    return(
        <div>
            <Outlet />
        </div>
    )
}