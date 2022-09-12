import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState} from 'react';
import { getProfileDoc } from "../../../../../Redux/actions/doctorActions";
import IconHome from "./iconHome";
import Agenda from './Agenda'
import Citas from "./citas";
import Perfil from "./Perfil";
import Resenas from "./Resenas";
import InfoData from "./InfoData";
import { BsPeopleFill } from "react-icons/bs";
import { BsFillCalendar2CheckFill } from "react-icons/bs"
import { BsCurrencyExchange } from "react-icons/bs"
import { BsChatRightQuoteFill } from "react-icons/bs"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { BsCalendar2CheckFill } from "react-icons/bs"






export default function PanelDoctor (){

  let doctor = useSelector((state)=> state.doctores.profile.data)
  const [isVisibleAgenda, setisVisibleAgenda] = useState(false);
  const [isVisiblePerfil, setisVisiblePerfil] = useState(true);
  const [isVisibleCitas, setisVisibleCitas] = useState(false);
  const [isVisibleResenas, setisVisibleResenas] = useState(false);
  const dispatch = useDispatch();

  const citaTotal = doctor?.appointments.length
  const valorCita = doctor?.doctor.checkUpPrice * citaTotal

  console.log(valorCita);


  


  useEffect(() => {
    dispatch(getProfileDoc())
  }, [dispatch]);
  
    return (
        <>
        <div className="flex justify-evenly">

         <div className="w-[15%] bg-[#292F53] -ml-10 flex h-screen flex-col items-center " id = 'navBar'>
          <IconHome/>
          <hr className="m-2 border-solid border-1 border-white w-2/3"></hr>

          <button className='font-poppins text-lg text-white rounded  w-40 h-10  mr-3 ml-3 mt-14 mb-9 flex items-center justify-start' onClick={() => {setisVisiblePerfil(!isVisiblePerfil)}}>{<BsFillPersonLinesFill className='mr-2 text-[#1479FF]'/>}Editar Perfil</button>
          <button className='font-poppins text-lg text-white rounded  w-40 h-10  mr-3 ml-3 mt-14  mb-9 flex items-center justify-start ' onClick={() => {setisVisibleCitas(!isVisibleCitas)}}>{<BsFillCalendar2CheckFill className='mr-2 text-[#1479FF]'/>}  Citas</button>
          <button className='font-poppins text-lg text-white rounded  w-40 h-10  mr-3 ml-3 mt-14 mb-9 flex items-center ' onClick={() => {setisVisibleResenas(!isVisibleResenas)}}>{<BsChatRightQuoteFill className='mr-2 text-[#1479FF]'/>}  Reseñas</button>
          <button className='font-poppins text-lg text-white rounded  w-40 h-10  mr-3 ml-3 mt-14 mb-9 flex items-center ' onClick={() => {setisVisibleAgenda(!isVisibleAgenda)}}>{<BsCalendar2CheckFill className='mr-2 text-[#1479FF]'/>}  Mi Agenda</button>

          </div>

          <div className="w-2/3 flex flex-col -ml-10" id ='panelVisualizacion'>
            <div className="flex items-center justify-end mt-4" id ='Doc Saludo'> 
              <img src={doctor?.doctor.image} className=" w-24 h-24 rounded-full object-cover m-4 border-solid border-2 border-[#1479FF] " alt='foto doc'/>
              <p className="text-[#292F53] text-5xl font-poppins  mt-4">Hola <span className="text-[#1479FF]">{doctor?.doctor.name.split(' ')[0] }!</span> </p>
            </div>
            <div className=" rounded -mr-4 h-fit mb-5 flex flex-row justify-around mt-5" id='InfoCards'>
                <InfoData 
                className={'w-48  bg-indigo-300  h-24 rounded m-3 flex flex-col justify-around'}
                text='Pacientes totales'
                icon = {<BsPeopleFill/>}
                dato = '4'
                />
                <InfoData 
                className={'w-48 bg-green-300 h-24 rounded m-3 flex flex-col justify-around'}
                text='Citas totales'
                icon = {<BsFillCalendar2CheckFill/>}
                dato = {citaTotal}
                />
                <InfoData 
                className={'w-48 bg-blue-200 h-24 rounded m-3 flex flex-col justify-around'}
                text='Dinero Total'
                icon = {<BsCurrencyExchange/>}
                dato = {Math.round(valorCita)}
                />
                <InfoData 
                className={'w-48 bg-orange-300 h-24 rounded m-3 flex flex-col justify-around'}
                text='Resenas'
                icon = {<BsChatRightQuoteFill/>}
                dato = '0'
                />
            </div>
            <div className=" bg-[#cbdeff9d] rounded -mr-4"> 
              <hr className="mt-7 border-solid border-1 m-6 border-[#ffffff]"></hr>
              {isVisiblePerfil ? <> <Perfil/>
                     <button className='font-poppins text-sm text-white rounded bg-[#1479FF] mt-6 p-2 mr-3 ml-4 mb-9' onClick={() => {setisVisiblePerfil(!isVisiblePerfil)}}>Cerrar  </button>
                    </> 
                : null}
              {isVisibleCitas ? <> <Citas/>
              <button className='font-poppins text-sm text-white rounded bg-[#1479FF] p-2 mr-3 ml-4 mb-9' onClick={() => {setisVisibleCitas(!isVisibleCitas)}}>Cerrar  </button>
                   </> 
                : null}
              {isVisibleAgenda ? <> <Agenda/> 
              <button className='font-poppins text-sm text-white rounded bg-[#1479FF] p-2 mr-3 ml-4 mb-9' onClick={() => {setisVisibleAgenda(!isVisibleAgenda)}}>Cerrar  </button>
                    </> 
                : null}
              {isVisibleResenas ? <> <Resenas/>
              <button className='font-poppins text-sm text-white rounded bg-[#1479FF] p-2 mr-3 ml-4 mb-9' onClick={() => {setisVisibleResenas(!isVisibleResenas)}}>Cerrar  </button>
                    </> 
                : null }
            </div>
          </div>
        </div>
        </>
    )
}