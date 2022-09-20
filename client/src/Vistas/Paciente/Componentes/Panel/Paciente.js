import React, { useEffect, useState } from 'react'
import { BsPeopleFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { getPatients, getPatientToken } from '../../../../Redux/actions/generalActionsPatients';

import InfoData from './infoData';
import Citas from './Citas';
import Favoritos from './Favoritos';
import NavBar from './NavBar';
import TopBar from './topBar';
import Favoritos from './Favoritos';



export default function Paciente() {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getPatients())
      dispatch(getPatientToken())
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

  let profile = useSelector((state) => state.generalPatients.profile.appointment)

  return (
    <>
    <div className="flex justify-evenly">
    <NavBar setSection={setSection} />
        <div className= "flex flex-col px-10 py-5 gap-5 w-11/12">
        <TopBar imgProfile={filtroPaciente[0]?.image} setSection={setSection} />
        <div className=" rounded  h-fit mb-5 flex flex-row items-end justify-end mt-5 mr-5">
            <InfoData 
                    className={'w-48  bg-indigo-300  h-24 rounded m-3 flex flex-col justify-around'}
                    text='Total citas'
                    icon = {<BsPeopleFill/>}
                    dato = {profile?.length}
            />
        </div>

        <div className="border p-5 shadow-md rounded"> 
            {section === "principal" ? 
            <>
            <img src={filtroPaciente[0]?.image} className=" w-20 h-20 rounded-full object-cover m-4 border-solid border-2 border-[#1479FF]  " alt='foto paciente'/>
            <p className="text-[#292F53] text-xl font-poppins  mt-3 ml-4 mb-4"> Hola  <span className='font-raleway text-[#292F53] text-lg tracking-wider	' >{filtroPaciente[0]?.name}</span> !</p>
            <p className="text-[#292F53] text-lg tracking-wider font-raleway  mt-3 ml-4 mb-4"> En este panel podras consultar tus citas medicas, y podras dejar reseñas a los medicos que has visitado!</p>
            </>
            : null}
            {section === "citas" ? <Citas /> : null}
            {section === "favoritos" ? <Favoritos /> : null}
        </div>
        </div>
    </div>
    </>
  )
}
