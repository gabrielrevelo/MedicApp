import { Navigate, Outlet } from "react-router-dom";
import{ PROFILE_ADMIN, PROFILE_DOCTOR, PROFILE_PATIENT } from '../../config/routes/paths';
import { useAuthContext } from "../../authContext";


export default function PublicRoute(){
    const {isAuth} = useAuthContext();
    
    if(isAuth && JSON.parse(window.localStorage.getItem('Rol')) === "ADMIN"){
        return <Navigate to={PROFILE_ADMIN} />
    }
    if(isAuth && JSON.parse(window.localStorage.getItem('Rol')) === "DOCTOR"){
        return <Navigate to={PROFILE_DOCTOR} />
    }
    if(isAuth && JSON.parse(window.localStorage.getItem('Rol')) === "PATIENT"){
        return <Navigate to={PROFILE_PATIENT} />
    }
    return(
        <div>
            <Outlet />
        </div>
    )
}