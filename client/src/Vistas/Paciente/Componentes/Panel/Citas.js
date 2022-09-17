import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {getPatientToken } from '../../../../Redux/actions/generalActionsPatients';
import Home from '../../../Compartido/Componentes/Home';
import FormResena from './formResena';


const Citas = ({Resenas}) => {
    const dispatch = useDispatch();

   const [openForm, setOpenForm] = useState(false);

    useEffect(() => {
      dispatch(getPatientToken())
    }, [dispatch]);

    let profile = useSelector((state) => state.generalPatients.profile)
   

    let appointments = profile.appointment
    console.log(appointments ,' los appoints');
   
    const hoy2 = new Date(Date.now()).toISOString().split('T')[0]


    return (
        <div>
            <p className='m-2 text-[#1479FF] text-xl font-poppins  mt-3 mb-4'>Tus <span className='text-[#292F53]'>citas</span> pendientes:</p>
            {appointments && appointments?.map( cita => {
                return (
                    <>

                    <div className='m-2 bg-white rounded'>
                        <span className="text-[#292F53] text-lg font-poppins  mt-3 mb-4">{cita.date.split('T')[0] > hoy2 &&  
                        <span>Fecha: </span>}</span>
                        <span className="text-[#292F53] text-lg font-raleway  mt-3 mb-4">{cita.date.split('T')[0] > hoy2 &&  cita.date.split('T')[0]}</span>
                        <p></p>
                        <span className="text-[#292F53] text-lg font-poppins  mt-3 mb-4">{cita.date.split('T')[0] > hoy2 &&  
                        <span>Hora: </span>}</span>
                        <span  className="text-[#292F53] text-lg font-raleway  mt-3 mb-4">{cita.date.split('T')[0] > hoy2 && cita.hour}</span>
                    <p></p>
                    </div>

                    </>
                )
            })}

            <p className='m-2 text-[#1479FF] text-xl font-poppins  mt-3 mb-4'>Tus <span className='text-[#292F53]'>citas</span>  terminadas: </p>
            {appointments && appointments?.map( cita => {
                return (
                    <>
                    <div className='m-2 bg-white rounded'>
                        <span className="text-[#292F53] text-lg font-poppins  mt-3 mb-4">{cita.date.split('T')[0] < hoy2 &&  
                        <span>Fecha: </span>}</span>
                        <span className="text-[#292F53] text-lg font-raleway  mt-3 mb-4">{cita.date.split('T')[0] < hoy2 &&  cita.date.split('T')[0]}</span>
                        <p></p>
                        <span>{cita.date.split('T')[0] < hoy2 &&  
                        <span className="text-[#292F53] text-lg font-poppins  mt-3 mb-4">Hora: </span>}</span>
                        <span className="text-[#292F53] text-lg font-raleway  mt-3 mb-4">{cita.date.split('T')[0] < hoy2 && cita.hour}</span>

                        <div>
                            {cita.date.split('T')[0] < hoy2 && cita.comment.length < 10 &&
                            <button className='bg-[#1479FF] rounded p-2 font-poppins text-white tracking-wide m-2' value = {cita._id} onClick={ (e) =>{setOpenForm(true)}}
                            >Deja tu reseña</button> 
                            }

                            {cita.date.split('T')[0] < hoy2 && cita.comment.length > 4 &&
                            <p className="text-[#292F53] text-lg font-raleway  mt-2 mb-4" >{cita.date.split('T')[0] < hoy2 && cita.comment}</p> 
                            }

                            {cita.date.split('T')[0] < hoy2 && openForm && cita.comment.length < 5 && 
                            <FormResena idCita = {cita._id}/>
                            }
                        </div>
                    </div>
                    </>
                )
            })}

            
          
        </div>
    );
}

export default Citas;
