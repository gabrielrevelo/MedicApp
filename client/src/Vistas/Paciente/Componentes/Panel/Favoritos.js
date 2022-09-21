import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPatientFavorites, clearFav } from '../../../../Redux/actions/generalActionsPatients';
import  {Link} from 'react-router-dom'
import { HiLocationMarker } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi";

export default function Favoritos() {
    const dispatch = useDispatch()
    const doctorFavoritos = useSelector(state => state.generalPatients.favoritos)


    useEffect(() => {
        dispatch(getPatientFavorites())
        return () => {
            dispatch(clearFav([]))
        }
    },[dispatch])
    const favEnable = doctorFavoritos.filter(el => el.enable === true)
    console.log(favEnable);


    return (
        <div className="flex flex-col flex-wrap items-center lg:items-start">
            <h1 className='m-2 text-[#1479FF] text-xl font-poppins  mt-3 mb-8 lg:w-fit w-[180px] text-center'>Estos son tus <span className='text-[#292F53]'>Doctores</span> Favoritos!</h1>
            <div className='flex flex-col lg:flex-row justify-around flex-wrap w-fit'>
            {
                favEnable ? favEnable.map((ele, i) => {
                    console.log(ele.doctor)
                    return (
                        <div>
                            <Link to ={`/patient/doctors/${ele.doctor._id}`}>
                                <section className='lg:w-[520px] bg-[#f9f9fa] h-fit mt-10 flex flex-col p-3 rounded-xl items-center shadow-md w-[200px]' >
                                    <div className=" flex lg:flex-row justify-center lg:w-[500px] lg:ml-7 flex-wrap flex-col">
                                    <img src={ele.doctor.image} alt={ele.doctor.name} className='w-36 h-36 rounded-xl object-cover lg:ml-2 ml-6 mt-5 shadow-md'/>
                                        <div className='lg:ml-6 mt-3'>
                                        <div className="lg:flex">
                                        <p className='font-poppins tracking-wide mt-1 text-lg text-[#292F53]'>{ele.doctor.name}    <span className="invisible"> ...</span></p>
                                            </div>
                                    
                                        {ele.doctor.specialities.map((speciality) => {
                                            return(
                                                <span key={speciality} className='font-raleway text-[#292f536f] mb-1 '>{speciality} |</span>
                                                )
                                            })}
                                        <div className="font-raleway text-[#292f53b8]"><span className='text-[#1479FF] mt-2 mb-2'>&#9733; </span>{ele.doctor.rating}</div>
                                        <span className='font-raleway w-fit text-[#1479FF] align-middle rounded flex flex-row '> <span className='mt-1'> <HiOutlinePhone/></span> : <span className='text-[#1479FF] tracking-[.10em]'>{ele.doctor.phoneNumber}</span> </span>
                                        <p className='font-poppins text-white mt-2 mb-2 bg-[#1479FF] rounded-lg p-2 w-fit lg:block hidden'> Costo de consulta: $ {ele.doctor.checkUpPrice}</p>
                        
                                        </div>
                                    </div>
                                    <hr className="border-1 lg:w-[400px] w-[200px] my-6"></hr>
                                    <p className='font-raleway text-[#292f53b8] text-sm mb-2 flex flex-row '> <span className='mr-2'><HiLocationMarker/></span>  {ele.doctor.city}, <span className='ml-2'>{ele.doctor.country}</span></p>
                                </section>
                        </Link>
                        </div>
                    )
                })
                    :
                    <p className='m-2 text-[#292F53] text-md font-raleway  mt-3 mb-4'>Aun no tienes favoritos</p>
            }
            </div>
        </div>
    )
}
