import React, { useEffect } from 'react'
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";



export default function Google(props) {
    const navigate = useNavigate()
    const clientId = "31532081050-nrgri514im6srt8c3e4thvg2dg6ionem.apps.googleusercontent.com";
    useEffect(() => {
        gapi.load("client:auth2", () => {
            gapi.auth2.init({ clientId: clientId })
        })
    }, [])

    const responseGoogle = async (response) => {

        
        console.log(response)

        const respuesta = await axios({
            url: '/auth/google',
            method: 'POST',
            data: {google:response.tokenId},
            

        })
        console.log(respuesta.data.token, "token")
        console.log(respuesta.data.data, "data")
        localStorage.setItem("auth-token", JSON.stringify(respuesta.data.token));
        localStorage.setItem("User", JSON.stringify(respuesta.data.data));
        window.sessionStorage.setItem(
          "Rol",
          JSON.stringify(respuesta.data.data.rol)
        );
        window.sessionStorage.setItem("isAuth", true);

        props.login()
        // if (respuesta.data.data.rol === 'PATIENT') {
        //         navigate('/')
        //     }

            
    }   

    




    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Ingresar con Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}
