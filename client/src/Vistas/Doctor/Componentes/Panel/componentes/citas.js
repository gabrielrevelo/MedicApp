
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect} from 'react';
import { getProfileDoc } from "../../../../../Redux/actions/doctorActions";


const Citas = () => {

    let doctor = useSelector((state)=> state.doctores.profile.data)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfileDoc())
    }, [dispatch]);

    return (
        <div>
                <section>
            <p className="text-[#292F53] text-xl font-poppins  mt-8 ml-4">Mis <span className="text-[#1479FF]">citas</span> de la semana:</p>
            {doctor?.appointments.map(cita =>{
                return(
                    <div className= " m-2 p-4 font-poppins text-[#1479FF]">
                    <p> Fecha: <span className=" text-[#292F53] font-raleway">{cita.date.split('T')[0]}</span></p>
                    <p>Hora: <span className=" text-[#292F53] font-raleway">{cita.hour}</span> </p>
                    <hr className=" w-5 mt-7 border-solid border-1 border-[#1479FF]"></hr>
                    </div>
                )
               
            })}
        </section>
        </div>
    );
}

export default Citas;
