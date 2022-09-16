import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import doctor2 from "../../../../Imagenes compartidas/doctor2.png";
import doctora from "../../../../Imagenes compartidas/doctora.png";
import iconSearch from "../../imagenes compartidas/icon-search.png";

import {
  getDocs,
  getDocsFiltered,
} from "../../../../Redux/actions/doctorActions";

export default function SearchBar({type}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const search = JSON.parse(sessionStorage.getItem("actualSearch"));
  const specialities = useSelector((state) => state.doctores.specialities);
  const cities = useSelector((state) => state.doctores.cities);
  const initialSelects = {
    speciality: "",
    city: "",
  }

  const [selects, setSelects] = useState(search || initialSelects);

  /* const [speciality, setSpeciality] = useState( (search && search.specialities) || "");
  const [city, setCity] = useState((search && search.cities) || ""); */


  useEffect(() => {
    dispatch(getDocs());
  }, [dispatch]);

  /* const citySelected = (e) => {
    setCity(e.target.value);
  };

  const specialitiesSearch = (e) => {
    setSpeciality(e.target.value);
    if (e.target.value === "Especialidad Medica") {
      setSpeciality("");
    } else if (cities.length > 0 && specialities.length > 0) {
      setCity("");
    }
  }; */

  const handleChange = (e) => {
    e.preventDefault();
    setSelects({...selects, [e.target.name] : e.target.value});
  }

  const handlerSearchButton = () => {
    console.log(selects);
    dispatch(getDocsFiltered(selects));
    sessionStorage.setItem('actualSearch', JSON.stringify(selects));
  };

  const rol = JSON.parse(sessionStorage.getItem('Rol'));


  return (
    <div className="flex items-center justify-center bg-[#E7EFFD] rounded-md w-full h-3/6 relative overflow-x-hidden">
      <img src={doctora} className={type === "NoHeader" ? "hidden" : "hidden md:block w-1/5 absolute left-12 bottom-0"} alt="doctor-img-header"/>
      <img src={doctor2} className={type === "NoHeader" ? "hidden" : "hidden md:block w-1/5 absolute right-12 bottom-0"} alt="doctor-img-header"/>
      <div className=" flex flex-col border-width: 2px justify-center text-center items-center w-full">
        <section className="text-3xl font-poppins line-height: 1.75rem; rounded m-8 pl-2 pr-2bg-blue-100 text-[#1479FF]">
          <span className=" font-poppins text-[#292F53]">
          <b className="text-[#1479FF]">ENCUENTRA</b> a tu especialista y <b className="text-[#1479FF]">AGENDA</b> una cita
          </span>
        </section>
        <div className="flex flex-col justify-center w-5/6 md:w-3/6">
          <div className="flex flex-col md:flex-row justify-center gap-3">
              <div className="flex" >
                    <select
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      value={selects.speciality}
                      name="speciality"
                      className="shadow-md shadow-[#292F53]/10 font-poppins outline-none bg-gray-50 border text-[#292F53] text-sm rounded-lg focus:[#1479FF block w-full py-2.5 px-6"
                    >
                      <option value="" >
                        Especialidad Médica
                      </option>
                      {specialities?.map((speciality) => {
                        return <option>{speciality}</option>;
                      })}
                    </select>
                  </div>
  
            <div className="flex">
                  <select
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    value={selects.city}
                    name="city"
                    className="shadow-md shadow-[#292F53]/10 font-poppins outline-none text-gray-900 text-sm rounded-lg block w-full py-2.5 px-6"
                  >
                    <option value="">
                    Ciudades
                    </option>
                    {cities?.map((city) => {
                      return <option>{city}</option>;
                    })}
                  </select>
         

        </div>

        <button
            class="flex items-center justify-center gap-2 font-poppins text-sm font-medium text-white bg-[#292F53] rounded-lg py-4 px-8 hover:bg-[#1479FF]"
            onClick={() => {
              handlerSearchButton();
            setTimeout( rol === 'ADMIN'? navigate("/admin/doctors", 1000) : rol === 'DOCTOR'? navigate("/admin/doctors", 1000) : rol === 'PATIENT'? navigate("/patient/doctors", 1000) :  navigate("/doctors", 1000));
            }}
          >
            <img src={iconSearch} alt="icon-search-button" className="w-6"/>
            Buscar
          </button>
        
          </div>
      </div>

      </div>

    </div>
  );
}
