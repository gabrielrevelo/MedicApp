import axios from "axios";
import { useParams } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getDocbyId,
  getTokensBySpeciality,
} from "../../Redux/actions/doctorActions";
import swal from "sweetalert";
import Swal from "sweetalert2";
import Modal from "../Compartido/Componentes/SwalStyled/index";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Compartido/imagenes compartidas/Logo Nav.png";
import NavBar from "../Compartido/Componentes/Header/NavBar";

export default function CheckOutForm(props) {
  //----------------------------------------------------

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const doctor = useSelector((state) => state.doctores.detail.data);
  const { idDoctor } = useParams();

  const [edit, setEdit] = useState();
  const stripe = useStripe();
  const elements = useElements();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(true);

  const hour = window.localStorage.getItem("hour");
  const date = window.localStorage.getItem("date");

  //---------------------------------------------------------------------------

  useEffect(() => {
    dispatch(getDocbyId(idDoctor));
  }, []);

  //-----------------------------------------------------

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      setSuccess(true);
      setLoading(true);

      const { id } = paymentMethod;
      const monto = parseFloat(doctor?.checkUpPrice);
      const token = window.localStorage.getItem("auth-token");
      const hour = window.localStorage.getItem("hour");
      const date = window.localStorage.getItem("date");
      const paymentProcessed = true;

      try {
        const { data } = await axios("/stripe/checkout ", {
          headers: { Authorization: `Bearer ${JSON.parse(token)}` },
          data: {
            amount: monto * 1000,
            id: id,
            date: date,
            hour: hour,
            idDoctor: idDoctor,
            paymentProcessed: paymentProcessed,
          },
          method: "POST",
        });

        elements.getElement(CardElement).clear();
        setSuccess(false);
        // console.log(elements.getElement(CardElement),"que es esto?")
        if (data.msg === "Successful payment") {
          let timerInterval;
          Modal.fire({
            title: "Se esta acreditando su pago",
            html: "Por favor espere unos segundos.",
            timer: 3000,
            timerProgressBar: true,
            didOpen: () => {
              Modal.showLoading();
              const b = Modal.getHtmlContainer().querySelector("b");
              timerInterval = setInterval(() => {
                b.textContent = Modal.getTimerLeft();
              }, 100);
            },
            willClose: () => {
              clearInterval(timerInterval);
            },
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Modal.DismissReason.timer) {
              console.log("Relizando pago");
            }
          });
          setTimeout(() => {
            Modal.fire("Genial!", "Pago realizado!", "success");
          }, 4000);
          setSuccess(false);
          // console.log();
          navigate("/patient/home");
        }
      } catch (error) {
        setSuccess(false);
        Modal.fire(error.message, "Intenta de nuevo");
        console.log(error, "error en check");
      }
    } else {
      if (error) Modal.fire(error.message, "Intenta de nuevo");

      setSuccess(false);
      console.log(error.message, "Error");
    }
    setLoading(false);
  };

  function handleChange(e) {
    setEdit({
      ...edit,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="">
      <NavBar />
      <div className="flex justify-center lg:py-10">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="w-full font-poppins text-sm bg-white flex flex-col gap-5 rounded-lg p-10 lg:w-1/2 text-[#292F53]"
        >
          <h1 className="text-center text-3xl">Tu orden</h1>
          <div className="text-sm bg-gray-200  p-4 rounded-lg">
            <div className="flex justify-between">
              <p>Doctor:</p>
              <p>{doctor?.name}</p>
            </div>
            <div className="flex justify-between">
              <p>Fecha:</p>
              <p>{date}</p>
            </div>
            <div className="flex justify-between">
              <p>Hora:</p>
              <p>{hour}</p>
            </div>
            <div className="flex justify-between">
              <p>Valor:</p>
              <p>${doctor?.checkUpPrice}</p>
            </div>
            <div className="text-xs text-center font-raleway">
              Una vez realizado el pago usted recibira un mail con todos los
              detalles.
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-start">Ingrese los datos de su tarjeta:</p>
            <CardElement
              required
              className="w-full p-4 text-sm font-poppins rounded-lg bg-white my-2 shadow-md border"
            />
          </div>
          <button
            disabled={!stripe}
            className="text-white w-full p-4 font-poppins text-sm rounded-lg bg-[#292F53] hover:bg-[#1479FF] focus:outline-none "
          >
            {loading ? (
              <div>
                <svg
                  role="status"
                  class="inline mr-3 w-4 h-4  animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
                Cargando...
              </div>
            ) : (
              <span className="">Realizar Pago: ${doctor?.checkUpPrice}</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
