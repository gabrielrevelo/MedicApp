import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';


const FormResena = ({idCita}) => {
    let navigate = useNavigate()
    console.log(useParams())
    console.log(idCita);

    const [input, setInput] = useState({
        comment: '',
        score: ''
    })

    function handleChangeComment(e) {
        setInput({
            ...input,
            comment: e.target.value
        })
    }

    function handleChangeScore(e) {
        setInput({
            ...input,
            score: e.target.value
        })
    }

    async function  handleSubmit(e) {
        e.preventDefault()
        await axios.patch(`http://localhost:3004/appointments/addreview/${idCita}`,input)
        swal({
            title: "Reseña Creada!",
            icon: "success"
        });
        navigate('/')
    }

    console.log(input, 'el input');
    return (
        <div>
            
            <form onSubmit={handleSubmit} className=' flex flex-col'>
                <label className="text-[#292F53] text-lg font-poppins  mt-8 mb-4">Deja tu comentario: </label>
                <input type ='text'
                    value = {input.comment}
                    className='font-raleway'
                    onChange={handleChangeComment}
                    />
                <select 
                className='w-32 mt-5 rounded text-[#1479FF]'
                onChange={handleChangeScore}
                defaultValue='1'
                >
                <option value="1">&#9733;</option>
                <option value="2">&#9733; &#9733;</option>
                <option value="3">&#9733; &#9733; &#9733; </option>
                <option value="4"> &#9733; &#9733; &#9733; &#9733; </option>
                <option value="5"> &#9733; &#9733; &#9733; &#9733; &#9733; </option>
                </select>
                
                <button className='bg-[#1479FF] rounded p-2 font-poppins text-white tracking-wide w-24 mt-5'>Enviar</button>
            </form>
        </div>
    );
}

export default FormResena;
