import {Link} from 'react-router-dom'
import { HOME_DOCTOR } from '../../../../../src/context/config/routes/paths'
import img from '../../../Doctor/Componentes/Panel/Assets/logo.png'

export default function IconHome(){
    return(
        <>
            <Link to= {HOME_DOCTOR}>
               <img src={img} alt='Logo' className=" w-[50px]  m-3"/>
            </Link>
            <p className='text-white'>Paciente Panel</p>
        </>
    )
} 