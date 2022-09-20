// import React from 'react';

// const Favoritos = () => {
//    return (
//        <>
//           <h1 className='m-2 text-[#1479FF] text-xl font-poppins  mt-3 mb-4'>Estos son tus <span className='text-[#292F53]'>Doctores</span> Favoritos!</h1>
//            <p className='m-2 text-[#292F53] text-md font-raleway  mt-3 mb-4'>Aun no tienes favoritos</p>
//        </>
//    );
// }

// export default Favoritos;


import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPatientFavorites, clearFav } from '../../../../Redux/actions/generalActionsPatients';
import TopDoctors from '../../../Compartido/Componentes/TopDoctors/TopDoctors';
import  {Link} from 'react-router-dom'


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
        <div className="flex flex-row flex-wrap ">
            {
                favEnable ? favEnable.map((ele, i) => {
                    console.log(ele.doctor)
                    return (
                        <div key={i} className="flex flex-row flex-wrap w-1/3 " style={{ zIndex: '1' }}>
                        {/* <img src={ele.doctor.image} alt="" /> */}

                            <div className="flex flex-col items-center w-full m-9 bg-white rounde-md shadow-md duration-300 hover:scale-105 hover:shadow-xl">
                                <div className="w-full h-80">
                                    <img src={ele.doctor.image ?ele.doctor.image : 'https://res.cloudinary.com/esteban3232/image/upload/v1663644754/eventApp/eqhsals6wpd0sykzgty6.webp'} className="w-full h-full object-cover object-top rounded-full p-7" alt="" />
                                </div>
                                <div className="flex flex-col items-center w-full h-full p-7">
                                    <p className="text-3xl text-gray-900 m-2 font-bold">{ele.doctor.name}</p>

                                    <div key={i} className="flex flex-col items-center w-full h-full p-7">
                                        <Link to={`/patient/doctors/${ele.doctor._id}`} className="px-6 py-1 mt-5 text-lg font-medium text-white bg-blue-500 rounded-lg border border-blue-700 active:scale-95 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 disabled:cursor-not-allowed transition-colors duration-200">Ver Perfil</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                })
                    : null
            }
        </div>
    )
}
