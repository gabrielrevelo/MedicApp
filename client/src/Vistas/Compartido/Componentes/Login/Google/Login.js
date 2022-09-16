import React, { useEffect } from "react";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Google({ login, className, rol }) {
  const navigate = useNavigate();
  const clientId =
    "31532081050-nrgri514im6srt8c3e4thvg2dg6ionem.apps.googleusercontent.com";
  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.auth2.init({ clientId: clientId });
    });
  }, []);

  
  // rol? rol : Swal.fire('selecciona un rol')
  const responseGoogle = async (response) => {
    const respuesta = await axios({
      url: "/auth/google",
      method: "POST",
      data: { google: response.tokenId,
        rol: rol
      },
    });
    console.log(respuesta, 'esteban');
    console.log(respuesta.data.token, "token");
    console.log(respuesta.data.data, "data");
    localStorage.setItem("auth-token", JSON.stringify(respuesta.data.token));
    localStorage.setItem("User", JSON.stringify(respuesta.data.data));
    window.sessionStorage.setItem(
      "Rol",
      JSON.stringify(respuesta.data.data.rol)
    );
    window.sessionStorage.setItem("isAuth", true);
    login();
    // if (respuesta.data.data.rol === 'PATIENT') {
    //         navigate('/')
    //     }
  };

  const customStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-evenly",
    gap: '10px'
  };

  return (
    <div>
    <GoogleLogin
      clientId={clientId}
      buttonText="Ingresar con Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
      render={(renderProps) => (
        <button onClick={renderProps.onClick} style={customStyle}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
            style={{
              width: "20px",
              height: "20px",
            }}
            alt="google"
          />
          Ingresa con Google
        </button>
    
      )}
    />
    </div>
  );
}
