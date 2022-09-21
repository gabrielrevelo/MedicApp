import Logo from "../../imagenes compartidas/Logo Nav.png"
import { Link} from 'react-router-dom';
import { LOGOUT_ADMIN, LOGOUT_DOCTOR, LOGOUT_PATIENT } from "../../../../context/config/routes/paths";



export default function NavBar ({avaliable}){

    const imagen = Logo
    const session = window.localStorage.getItem('session')
    const user = JSON.parse(window.localStorage.getItem('User'))
    console.log(window.location,"ubicacion")

    return (
        <div className=''>
            <div className="flex flex-row justify-between bg-[#E7EFFD] md:mx-5 px-5 py-3 border-b border-[#292f5333]">
            <Link to = {user?.rol === 'ADMIN' ? '/admin/home' : user?.rol === 'DOCTOR' ? '/doctor/home' : user?.rol === 'PATIENT' ? '/patient/home' : '/'}>
            <img className="object-contain w-16" src={imagen} alt='logo'/>
            </Link>
            <div className="flex items-center">
            
            {
                user ? 
                <div className="flex font-raleway items-center mx-2 gap-2">
                    <div className="flex flex-col items-end justify-center gap-1"> 
                        <p className="text-xs">{user?.email}</p>
                        <p className="text-xs opacity-75">Rol: {user?.rol}</p>
                    </div>
                    <Link to={user?.rol === 'ADMIN' ? '/admin' : user?.rol === 'DOCTOR' ? '/doctor' : user?.rol === 'PATIENT' ? '/patient' : null}>
                        <p className="text-white w-full py-2 px-4 font-poppins md:text-sm text-xs rounded-lg bg-[#292F53] hover:bg-[#1479FF] focus:outline-none ">Panel</p>
                    </Link>

                </div>
                : null
            }

            {
                JSON.parse(session) ? 
                        user.rol === 'ADMIN' ?
                    <Link to={LOGOUT_ADMIN}><p className="text-white w-full py-2 px-4 font-poppins md:text-sm text-xs rounded-lg bg-[#292F53] hover:bg-[#1479FF] focus:outline-none ">Logout</p> </Link>
                    :  user.rol === 'DOCTOR' ?
                    <Link to={LOGOUT_DOCTOR}> <p className="text-white w-full py-2 px-4 font-poppins md:text-sm text-xs rounded-lg bg-[#292F53] hover:bg-[#1479FF] focus:outline-none ">Logout</p></Link>
                    :   user.rol === 'PATIENT'?
                    <Link to={LOGOUT_PATIENT}><p className="text-white w-full py-2 px-4 font-poppins md:text-sm text-xs rounded-lg bg-[#292F53] hover:bg-[#1479FF] focus:outline-none ">Logout</p> </Link> 
                    : 
                    window.location.href !== "http://localhost:3000/login"?
                    <Link to ='/login'>
                        <p className="text-white w-full py-2 px-4 font-poppins md:text-sm text-xs rounded-lg bg-[#292F53] hover:bg-[#1479FF] focus:outline-none">Ingresar</p>
                    </Link>
                    :<></>
                    : window.location.href !== "http://localhost:3000/login" ?
                    <Link to ='/login'>
                        <p className="text-white w-full py-2 px-4 font-poppins md:text-sm text-xs rounded-lg bg-[#292F53] hover:bg-[#1479FF] focus:outline-none ">Ingresar</p>
                    </Link>
                    :<></>
            }
            
            </div>
            </div>
            
            
            {/* <div className="flex items-center space-x-10 ">
                Inicio
                Conócenos
                ¿Eres medico?
                Blog
            </div>
          
            <div>
            
                <select>
                    <option>Registrarme</option>
                    <option>Medico</option>
                    <option>Usuario</option>
                    <option>Admin</option>
                </select>
                <button>Iniciar Sesión</button>
            </div> */}
           
        </div>
    )

}