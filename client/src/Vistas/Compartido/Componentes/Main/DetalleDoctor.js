import {useParams} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState} from 'react';
import { getDocbyId } from '../../../../Redux/actions/doctorActions';
import StarDetail from "./StarDetail";
import { HiLocationMarker } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi";
//import Stripe from '../../../Paciente/StripeCheckOut'
import NavBar from '../Header/NavBar';
import {Link} from 'react-router-dom'
import mapa from '../../imagenes compartidas/mapa.jfif';
import Mapa from "./mapa";
function DetalleDoctor (){

  const { idDoctor } = useParams();

  
  const dispatch = useDispatch();
  let doctor = useSelector((state)=> state.doctores.detail.data)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedHour, setSelectedHour] = useState('')
  let schedule = useSelector((state)=> state.doctores.detail.data?.schedule)

  let hours = schedule?.hour

  let separateHours = hours?.split('-')
  let separateHours1 = doctor && separateHours[0]?.trim()
  let separateHours2 = doctor && separateHours[1]?.trim()

  let separateHours1A = separateHours1?.replace(':00','')
  let separateHours2A = separateHours2?.replace(':00','')



  let rating = doctor?.rating

  // console.log(separateHours1A, 'lo que me trae hours');
  // console.log(separateHours2A, 'lo que me trae hours2');
/*
  function handleClickDate(e){
    setSelectedDate({
      date: e.target.value})
  }

  function handleClickHour(e){
    setSelectedHour({
      hour: e.target.value})
  }   */

  function handleClickDate(e){
    setSelectedDate(e.target.value)
  }

  function handleClickHour(e){
    setSelectedHour(e.target.value)
  }
  
  // function handleDelete(){
  //   window.location.reload(false);
  // }

  useEffect(() => {
    dispatch(getDocbyId(idDoctor),
    Mapa()
    )
    /* console.log(rating, 'dispatch'); */

  },[dispatch, doctor?.rating, idDoctor, rating]);
  
  //variables para setear localStorage
  const address = doctor && doctor.address
  const country = doctor && doctor.country

  //Sets Storage
  localStorage.setItem('hour',selectedHour)
  localStorage.setItem('date',selectedDate)
  localStorage.setItem('address',address)
  localStorage.setItem('country', country) 
  // console.log(selectedDate ,'selected date');
  // console.log(selectedHour, 'selectred hour');

  const user = JSON.parse(window.localStorage.getItem('User'))
  
  //trae datos de mapa
  const lng = localStorage.getItem('longitude');
  const lat = localStorage.getItem('latitude');
  console.log('latitude: ', lat,'Longitude: ', lng)
  return(
      <>
      <NavBar/>
      <div className='flex flex-row w-screen justify-evenly flex-wrap min-h-screen bg-[#E7EFFD] '>

        <div>
          <section className='bg-white w-[550px] h-fit mt-10 flex flex-row p-3 rounded items-center' >
            <img src={doctor && doctor.image} alt={doctor && doctor.name} className='w-40 h-40 rounded-full object-cover border-solid border-2 border-[#1479FF]'/>
            <div className='ml-4'>
            <p className='font-poppins tracking-wide mt-1 mb-2 '>{doctor && doctor.name}</p>
            <p className='font-raleway text-[#292f536f] -mt-2 mb-2  text-xs'>Licencia: {doctor?.license}</p>
              {doctor && doctor.specialities.map((speciality) => {
                return(
                  <span key={speciality} className='font-raleway text-[#292f536f] mt-1 mb-2 '>{speciality} | </span>
                )
              })}
            <p className='font-raleway text-[#292f53b8] text-sm mt-2 mb-2 flex flex-row '> <span className='mr-2'><HiLocationMarker/></span>  {doctor?.city}, <span className='ml-2'>{doctor?.country}</span></p>
            <p className='font-raleway text-[#292f536f] mt-2 mb-2 '> Precio consulta: {doctor?.checkUpPrice}</p>
            <div class= 'relative bg-blue-800 flex justify-center'>
            <img src={mapa} class='z-0'/>
            <div class='absolute my-12 py-4'> 
            <a href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`} target='_blank'>
            <span class=" z-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ampliar</span>
            </a>
            </div>
            </div>
            <span className='font-raleway w-fit text-[#1479FF] align-middle rounded flex flex-row '> <span className='mt-1'><HiOutlinePhone/></span>: <span className='text-[#1479FF] tracking-[.10em]'>{doctor?.phoneNumber}</span> </span>

            <div className='text-[#1479FF] mt-2 mb-2 '>
                &#9733; <span className="font-raleway text-[#292f53b8]">{doctor?.rating}</span>
              {/* {<StarDetail
              stars={4}/>} */}
            </div>
           
            </div>
          </section>
          <section className='bg-white w-[550px] h-fit mt-10 rounded-t' >
          <h1 className='bg-[#1479FF] font-poppins text-white h-10 align-middle	p-2 rounded-t' >Reseñas</h1>
            <p className='font-raleway text-[#030304b8] text-sm mt-4 mb-2 text-center' >{doctor?.name} Aun no tiene reseñas</p>
            <br></br>
          </section>
        </div>

        <div>
        <section className='bg-white w-[550px] h-fit mt-10 rounded mb-2' >

          <p className='bg-[#1479FF] font-poppins text-white h-10 align-middle	p-2 rounded-t' >Agenda tu cita</p>

          <p className='font-raleway text-[#292f53b8] text-sm mt-2 mb-2 ml-2'> Direccion: {doctor && doctor.address}</p>

          <p className='font-poppins tracking-wide mt-1 mb-2 ml-2'> Selecciona tu fecha:</p>

          <input type="date" id="start" name="trip-start" min="2022-09-09" max="2022-09-23" className="font-raleway ml-2" onClick={e => handleClickDate(e)}/>
          <br></br>



          <p className='font-poppins tracking-wide mt-1 mb-2 ml-2'> Selecciona tu Hora:</p>
          <div>
          {(() => {
            let td = [];
            for (let i = separateHours1A; i <= separateHours2A; i++) {
              td.push(<button className='font-raleway text-white mt-1 mb-2 focus:bg-[#292F53] rounded bg-[#1479FF] w-28 h-6 m-3' key={i} value={i + ':00'} onClick={e => handleClickHour(e)}>{i + ':00'}</button>);
            }
            return td;
          })()}
          </div>
          { selectedDate.length > 1  ? (
           <p className='font-raleway text-[#292f53b8] text-sm mt-9 mb-2 ml-2'>Tu cita esta agendada para el  <span className='font-poppins tracking-wide mt-1 mb-2  text-center text-[#1479FF] ml-2' >{selectedDate} </span> a las <span className='font-poppins tracking-wide mt-1 mb-2 ml-2 text-[#1479FF]'>{selectedHour} </span></p>
            ):(
              <span></span>
              )}
          {selectedDate.length >1 && selectedHour.length>1 ? (
            <div className=" flex justify-center   ">
              <Link to={ user?.rol === 'ADMIN' ? '/admin/doctors' : user?.rol === 'DOCTOR' ? '/doctor/doctors' : user?.rol === 'PATIENT' ? '/patient/buy/doctor/' + idDoctor : "/login"} className='font-poppins text-lg text-white text-center  focus:bg-[#292F53] rounded bg-[#1479FF] w-40 h-10 m-3 mt-8 pt-1'> Reserva tu cita</Link>
             {/* "/dummy/doctors/" + idDoctor + "/stripe" */}
            </div>
            ):(
            <span></span>
            )}
        </section>
        </div>
      </div>
      </>
  )
}


export default DetalleDoctor;