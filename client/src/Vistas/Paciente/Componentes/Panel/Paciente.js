import React, { useEffect, useState } from 'react'
import { BsPeopleFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { getPatients } from '../../../../Redux/actions/generalActionsPatients';

import InfoData from '../../../Doctor/Componentes/Panel/componentes/InfoData';
import Citas from './Citas';
import Resenas from './Resenas';
import NavBar from './NavBar';


export default function Paciente() {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getPatients())
    }, [dispatch]);

    let pacientes1 = useSelector((state)=> state.generalPatients)
    let pacientes = pacientes1.patients

    const [section, setSection] = useState("principal");

    
    useEffect(() => {
        dispatch(getPatients())
      }, [dispatch]);

  const detailPatient = JSON.parse(localStorage.getItem('User'))
  let emailLogin = detailPatient.email

  let filtroPaciente = pacientes.filter(paciente => paciente?.email === emailLogin )

  return (
    <>
    <div className="flex justify-evenly">
    <NavBar setSection={setSection} />

        <div className= "flex flex-col px-10 py-5 gap-5 w-11/12">
            <div className="flex items-center justify-end mt-4" id ='Doc Saludo'> 
              <img src={filtroPaciente[0]?.image} className=" w-24 h-24 rounded-full object-cover m-4 border-solid border-2 border-[#1479FF] " alt='foto paciente'/>
              <p className="text-[#292F53] text-5xl font-poppins  mt-4">Hola <span className="text-[#1479FF]">{ filtroPaciente[0]?.name.split(' ')[0] }!</span> </p>
            </div>
        <div className=" rounded -mr-4 h-fit mb-5 flex flex-row justify-center mt-5" id='InfoCards'>
            <InfoData 
                    className={'w-48  bg-indigo-300  h-24 rounded m-3 flex flex-col justify-around'}
                    text='Total citas'
                    icon = {<BsPeopleFill/>}
                    dato = '2'
            />
            <InfoData 
                    className={'w-48   bg-green-300 h-24 rounded m-3 flex flex-col justify-around'}
                    text='Total Reseñas'
                    icon = {<BsPeopleFill/>}
                    dato = '0'
            />
        </div>

        <div className="border p-5 shadow-md rounded"> 
            {section === "principal" ? 
            <>
            <p className="text-[#292F53] text-xl font-poppins  mt-3 ml-4 mb-4"> Tu nombre: <span className='font-raleway text-[#292F53] text-lg tracking-wider	' >{filtroPaciente[0]?.name}</span></p>
            <p className="text-[#292F53] text-xl font-poppins  mt-3 ml-4 mb-4">Tu foto: </p>
            <img src={filtroPaciente[0]?.image} className=" w-24 h-24 rounded-full object-cover m-4 border-solid border-2 border-[#1479FF] " alt='foto paciente'/>
            <p className="text-[#292F53] text-xl font-poppins  mt-3 ml-4 mb-4"> Tu Correo: <span className='font-raleway text-[#292F53] text-lg tracking-wider	'>{filtroPaciente[0]?.email}</span></p>
            </>
            : null}
            {section === "citas" ? <Citas /> : null}
            {section === "reseñas" ? <Resenas /> : null}
        </div>
        </div>
    </div>
    </>
  )
}
