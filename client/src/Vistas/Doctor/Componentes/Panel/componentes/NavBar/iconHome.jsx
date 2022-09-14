import {Link} from 'react-router-dom'
import { HOME_PATIENT } from '../../../../../../context/config/routes/paths'
import img from '../../Assets/logo.png'

export default function IconHome(){
    return(
        <>
            <Link to= {HOME_PATIENT}>
               <img src={img} alt='Logo' className=" w-[50px]  m-3"/>
            </Link>
            <p className='text-white'>Doctor Panel</p>
        </>
    )
}