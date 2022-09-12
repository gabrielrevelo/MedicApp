
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect} from 'react';
import { getProfileDoc } from "../../../../../Redux/actions/doctorActions";

const Perfil = () => {

    let doctor = useSelector((state)=> state.doctores.profile.data)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfileDoc())
      }, [dispatch]);

    return (
        <div className='mb-4'>
            <p className="text-[#292F53] text-xl font-poppins  mt-8 ml-4 mb-4"> Tu foto: <span className='ml-4 text-xs text-[#1479FF] font-raleway underline'>editar</span></p>
            <img className='font-raleway text-white w-28 h-28 ml-4 object-cover -mt-3 rounded-full'src={doctor?.doctor.image} alt='fotodoc'/>
            <p className="text-[#292F53] text-xl font-poppins  mt-3 ml-4 mb-4"> Tu nombre: <span className='font-raleway text-[#292F53] text-lg tracking-wider	'>{doctor?.doctor.name}<span className='ml-4  tracking-wider text-xs text-[#1479FF] font-raleway underline'>editar</span></span></p>
            <p className="text-[#292F53] text-xl font-poppins  mt-8 ml-4 mb-4"> Tu tarifa: <span className='font-raleway text-[#292F53] text-lgtracking-wider	'>{doctor?.doctor.checkUpPrice}<span className='ml-4  tracking-wider	text-xs text-[#1479FF] font-raleway underline'>editar</span></span></p>
            <p className="text-[#292F53] text-xl font-poppins  mt-8 ml-4 mb-4"> Tu direccion: <span className='font-raleway text-[#292F53] text-lgtracking-wider	'>{doctor?.doctor.address}<span className='ml-4  tracking-wider	text-xs text-[#1479FF] font-raleway underline'>editar</span></span></p>
            <p className="text-[#292F53] text-xl font-poppins  mt-8 ml-4 mb-4"> Tu email: <span className='font-raleway text-[#292F53] text-lgtracking-wider	'>{doctor?.doctor.email}<span className='ml-4 text-xs tracking-wider	 text-[#1479FF] font-raleway underline'>editar</span></span></p>
        </div>
    );
}

export default Perfil;
