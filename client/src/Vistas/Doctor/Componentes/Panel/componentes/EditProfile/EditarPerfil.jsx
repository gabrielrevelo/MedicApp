import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editDoctor } from "../../../../../../Redux/actions/generalActionsDoctors";
import InputImage from "../../../../../Compartido/Componentes/InputImage/InputImage";
import icon from "../../Assets/ico-dark.png";
import Modal from "../../../../../Compartido/Componentes/SwalStyled/index"

const EditProfile = ({ info, setSection }) => {
  const dispatch = useDispatch();
  let [doctor, setDoctor] = useState(info);
  let id = doctor?.doctor._id;
  let [input, setInput] = useState({
    name: doctor?.doctor.name,
    phoneNumber: doctor?.doctor.phoneNumber,
    address: doctor?.doctor.address,
    image: doctor?.doctor.image,
    hour: doctor?.doctor.schedule ? doctor.doctor.schedule.hour.split("-") : null,
    checkUpPrice: doctor?.doctor.checkUpPrice,
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(input);
  };

  const handleEdit = (e) => {
    input = {
      ...input, 
      schedule: {hour: input.hour.join(" - ")}
    }
    console.log(input)
    dispatch(editDoctor(id, input));
    Modal.fire("Edicion exitosa");
  };

  function handleImage(imgUrl) {
    setInput({ ...input, image: imgUrl });
  }

  function handleHour(e) {
    let hour = [...input.hour];
    if (e.target.id === "first") hour[0] = e.target.value;
    if (e.target.id === "second") hour[1] = e.target.value;
    console.log(input.hour[0].substring(0, 2));
    console.log(input.hour[1].substring(0, 2));
    setInput({ ...input, hour });
  }

  console.log(input)

  return (
    <div className="">
      {doctor ? (
        <div className="flex flex-col w-full">
          <p className="flex gap-2 text-[#292F53] text-xl font-poppins mb-5">
            <img src={icon} alt="icon" className="w-7" />
            Editar informacion
          </p>
          <div className="flex flex-col gap-[10px] bg-white rounded-[10px] px-5 py-[20px]">
            <div className="flex flex-col sm:flex-row">
              <p className="w-1/5">Nombre:</p>
              <input
                type="text"
                name="name"
                value={input.name}
                onChange={(e) => handleChange(e)}
                className="w-full w-4/5 sm:ml-[10px] px-[10px] rounded bg-gray-200 font-raleway"
              />
            </div>
            <div className="flex flex-col sm:flex-row">
              <p className="w-1/5">Direccion:</p>
              <input
                type="text"
                name="address"
                value={input.address}
                onChange={(e) => handleChange(e)}
                className="w-full w-4/5 sm:ml-[10px] px-[10px] rounded bg-gray-200 font-raleway"
              />
            </div>
            <div className="flex flex-col sm:flex-row">
              <p className="w-1/5">Telefono:</p>
              <input
                type="text"
                name="phoneNumber"
                value={input.phoneNumber}
                onChange={(e) => handleChange(e)}
                className="w-full w-4/5 sm:ml-[10px] px-[10px] rounded bg-gray-200 font-raleway"
              />
            </div>
            <div className="flex flex-col sm:flex-row">
              <p className="w-1/5">Horario:</p>
              <div className="w-full w-4/5 sm:ml-[10px] px-[10px] rounded bg-gray-200 font-raleway">
                <select id="first" onChange={(e) => handleHour(e)}>
                  <option value="07:00" selected>
                    7 AM
                  </option>
                  <option value="08:00">8 AM</option>
                  <option value="09:00">9 AM</option>
                  <option value="10:00">10 AM</option>
                  <option value="11:00">11 AM</option>
                  <option value="12:00">12 AM</option>
                  <option value="13:00">1 PM</option>
                  <option value="14:00">2 PM</option>
                  <option value="15:00">3 PM</option>
                  <option value="16:00">4 PM</option>
                  <option value="17:00">5 PM</option>
                  <option value="18:00">6 PM</option>
                  <option value="19:00">7 PM</option>
                </select>
                -
                <select id="second" onChange={(e) => handleHour(e)}>
                  <option value="08:00" selected>
                    8 AM
                  </option>
                  <option value="09:00">9 AM</option>
                  <option value="10:00">10 AM</option>
                  <option value="11:00">11 AM</option>
                  <option value="12:00">12 AM</option>
                  <option value="13:00">1 PM</option>
                  <option value="14:00">2 PM</option>
                  <option value="15:00">3 PM</option>
                  <option value="16:00">4 PM</option>
                  <option value="17:00">5 PM</option>
                  <option value="18:00">6 PM</option>
                  <option value="19:00">7 PM</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row">
              <p className="w-1/5">Tarifa:</p>
              <input
                type="text"
                name="checkUpPrice"
                placeholder="$"
                value={input.checkUpPrice}
                onChange={(e) => handleChange(e)}
                className="w-full w-4/5 sm:ml-[10px] px-[10px] rounded bg-gray-200 font-raleway"
                required=""
              />
            </div>
            <InputImage
              imgUrl={input.image}
              className="flex flex-col-reverse gap-3 mt-3 items-center text-xs xl:flex-row p-4 shadow-md border rounded-lg my-2"
              action={handleImage}
            />
          </div>
          <button
            className="font-poppins text-lg text-white rounded bg-[#292F53] hover:bg-[#1479FF] py-[5px] mt-[10px]"
            onClick={(e) => handleEdit(e)}
          >
            Editar perfil
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default EditProfile;
