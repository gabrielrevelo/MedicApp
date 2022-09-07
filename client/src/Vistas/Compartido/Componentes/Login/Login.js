import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import imgLogin from '../../imagenes compartidas/login.jpeg'
import NavBar from '../Header/NavBar';
import bcryp from 'bcryptjs'
import axios from 'axios'

const Validate = (input) => {
    let errors = {};
    if (!input.email) errors.email = "el email es obligatorio";
    if (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(input.email) ===false)
        errors.email = "email debe ser de la forma: example@gmail.com";
    if (!input.password) errors.password = "debe ingresar una contraseña";
    return errors
}


export default function Login() {
    const [input, setInput] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({
    email: "email is required",
  });


    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value.replace(/ /g,'')//quitar espacios
        })
        let errorsResult = Validate({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(errorsResult)
    }

    const handleSubmit = async(e) =>{
        e.preventDefault()
        const hashedPassword =  bcryp.hashSync( input.password, 10)
        const data = {email:input.email, password: hashedPassword}

        const response = await axios('http://localhost:3004/auth/signin',{
            method: 'POST',
            data:data
        })

        console.log(response);
        
    }

    return (
        <div>
        <NavBar avaliable='not'/>
            <div>
                <section className="min-h-screen flex items-stretch text-white ">
                    <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0" style={{ backgroundColor: '#292F53' }}>
                        <div className="w-full py-6 z-20">
                            
                            <div className="py-6 space-x-2">
                            </div>

                            <form onSubmit={e => handleSubmit (e)} className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                                <div className="pb-2 pt-4">
                                    <input type="email" name="email" id="email" placeholder="Email" value={input.email} onChange={e => handleChange(e)} className="block w-full p-4 text-lg text-zinc-500 rounded-sm bg-white" />
                                    {errors && errors.email ? <span className="text-red-600"> {errors.email} </span> : null}

                                </div>
                                <div className="pb-2 pt-4">
                                    <input className="block w-full p-4 text-lg text-zinc-500 rounded-sm bg-white" value={input.password} onChange={e => handleChange(e)}  type="password" name="password" id="password" placeholder="Password" />
                                    {errors && errors.password ? <span className="text-red-600"> {errors.password} </span> : null}
                                </div>
                                <div className="text-right text-slate-400 hover:underline hover:text-gray-100">
                                    <Link to='/'>Forgot your password?</Link>
                                </div>
                                <div className="px-4 pb-2 pt-4">
                                    <button className="uppercase block w-full p-4 text-lg rounded-full bg-blue-500 hover:bg-blue-600 focus:outline-none ">Entrar</button>
                                </div>
                                <div className="px-4 pb-2 pt-4">
                                    <Link to='/register'>
                                        <button className="uppercase block w-full p-4 text-lg rounded-full bg-lime-500 hover:bg-lime-600 focus:outline-none">Registrate</button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="lg:flex w-1/2 hidden bg-blue-500 bg-no-repeat bg-cover relative items-center z-10" style={{ backgroundImage: `url(${imgLogin})` }}>
                        <div className="absolute bg-blue-400 opacity-10 inset-0  -z-1" />
                        <div className="w-full px-20   opacity-60 ">
                            <h1 className="text-6xl font-bold text-left text-zinc-500 tracking-wide">MediApp</h1>
                            <p className="text-3xl my-3 text-zinc-500 -mx-6 m-2 -top-8 ">Cuidamos tu Salud y La De Tu Familia</p>
                        </div>

                    </div>
                </section>
            </div>

        </div>
    );
}
