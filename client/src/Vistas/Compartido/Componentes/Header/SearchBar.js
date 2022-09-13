import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import doctor2 from "../../../../Imagenes compartidas/doctor2.png";
import doctora from "../../../../Imagenes compartidas/doctora.png";
import iconSearch from "../../imagenes compartidas/icon-search.png";
// import { Link } from "react-router-dom";

import {
  getDocsBySpecialities,
  getDocs,
  getDocsByCities,
  getDocsFiltered,
} from "../../../../Redux/actions/doctorActions";
import { useHistory } from "react-router-dom";

export default function SearchBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [specialities, setSpecialities] = useState("");
  const [cities, setCities] = useState("");
  const doctors = useSelector((state) => state.doctores);

  const doctoresFiltrados = useSelector(
    (state) => state.doctores.filteredDoctors
  );
  const ciudadesFiltradas = useSelector(
    (state) => state.doctores.filteredByCities
  );
  const speciality = useSelector((state) => state.doctores.specialities);
  const city = useSelector((state) => state.doctores.cities);
  const resultadoP = useSelector((state) => state.doctores.newFilter);
  const [error, setError] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    dispatch(getDocs());
  }, []);

  const citySelected = (e) => {
    setCities(e.target.value);
  };

  const specialitiesSearch = (e) => {
    setSpecialities(e.target.value);
    if (e.target.value === "Especialidad Medica") {
      setSpecialities("");
    } else if (cities.length > 0 && specialities.length > 0) {
      setCities("");
    }
  };

  const handlerSearchButton = () => {
    dispatch(getDocsFiltered({ cities, specialities }));
    dispatch(getDocsBySpecialities(specialities));
    dispatch(getDocsByCities(cities));
    setAnswer(specialities);
    setError("No se ha encontrado un medico especialista en esa ciudad");
    // history.push("/dummy/doctors");
  };

  const rol = JSON.parse(sessionStorage.getItem('Rol'))

  return (
    <div className="flex items-center justify-center bg-[#E7EFFD] rounded-md border-spacing-24 border-2 w-full h-3/6 relative overflow-x-hidden">
      <img src={doctora} className="hidden md:block w-1/5 absolute left-12 bottom-0" alt="doctor-img-header"/>
      <img src={doctor2} className="hidden md:block w-1/5 absolute right-12 bottom-0" alt="doctor-img-header"/>
      <div className=" flex flex-col border-width: 2px justify-center text-center items-center w-full">
        <section className="text-3xl font-poppins line-height: 1.75rem; rounded m-8 pl-2 pr-2bg-blue-100 text-[#1479FF]">
          <span className=" font-poppins text-[#292F53]">
          <b className="text-[#1479FF]">ENCUENTRA</b> a tu especialista y <b className="text-[#1479FF]">AGENDA</b> una cita
          </span>
        </section>

        <div className="flex flex-col justify-center w-5/6 md:w-3/6">
          <div className="flex flex-col md:flex-row justify-center gap-3">
{/*             <form> */}
              <div className="flex" >
           {/*      <label
                  for="search-dropdown"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                ></label> */}
              {/*   <button
                  id="dropdown-button"
                  data-dropdown-toggle="dropdown"
                  className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-tl-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-blue-900 dark:hover:bg-blue-500 dark:focus:ring-gray-700 dark:text-gray dark:border-gray-600"
                  type="button"
                >
                   */}
 
                    <select
                      onChange={(e) => {
                        specialitiesSearch(e);
                      }}
                      className="shadow-md shadow-[#292F53]/10 font-poppins outline-none bg-gray-50 border text-[#292F53] text-sm rounded-lg focus:[#1479FF block w-full py-2.5 px-6"
                    >
                      <option>Especialidad Medica</option>
                      {speciality?.map((c) => {
                        return <option>{c}</option>;
                      })}
                    </select>
                  </div>
            {/*       <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </button> */}
              {/*   <div
                  id="dropdown"
                  className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                  data-popper-reference-hidden=""
                  data-popper-escaped=""
                  data-popper-placement="top"
                  class="position: absolute inset: auto auto 0px 0px+ margin: 0px transform: translate3d(897px, 5637px, 0px)"
                ></div> */}
                {/* <div className="relative w-full">
                  <input
                    disabled="true"
                    placeholder="ej. Odontologia"
                    value={specialities}
                    onChange={(e) => {
                      specialitiesSearch(e);
                    }}
                    type="search"
                    id="search-dropdown"
                    className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-700 focus:border-blue-500 dark:bg-blue-0 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:border-blue-500"
                    required
                  />
                </div> */}
    

            <div className="flex">
             {/*  <label
                for="search-dropdown"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
              >
                Your Email
              </label> */}
              {/* <button
                id="dropdown-button"
                data-dropdown-toggle="dropdown"
                className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-bl-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-blue-900 dark:hover:bg-blue-500 dark:focus:ring-gray-700 dark:text-gray dark:border-gray-600"
                type="button"
              >
                {" "} */}
                  <select
                    onChange={(e) => {
                      citySelected(e);
                    }}
                    className="shadow-md shadow-[#292F53]/10 font-poppins outline-none text-gray-900 text-sm rounded-lg block w-full py-2.5 px-6"
                  >
                    <option>Ciudades</option>
                    {city?.map((c) => {
                      return <option>{c}</option>;
                    })}
                  </select>

               {/*  <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </button> */}
              {/* <div
                id="dropdown"
                className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                data-popper-reference-hidden=""
                data-popper-escaped=""
                data-popper-placement="top"
                class="position: absolute inset: auto auto 0px 0px+ margin: 0px transform: translate3d(897px, 5637px, 0px)"
              ></div> */}
             {/*  <div className="relative w-full">
                <input
                  disabled="true"
                  value={cities}
                  onChange={(e) => {
                    citySelected(e);
                  }}
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-blue-0 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:border-blue-500"
                  placeholder="ej. Santa Fe"
                  required
                />
              </div> */}

            {/* </form>
          </div> */}
          {/* <Link to={"/dummy/doctors"}> */}
          {/* <button
            class="text-sm font-medium text-white bg-blue-900 rounded-r-lg border border-blue-900 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-900 dark:hover:bg-blue-000"
            onClick={() => {
              handlerSearchButton();
              // setTimeout(navigate("/dummy/doctors", 1000));
            setTimeout( rol === 'ADMIN'? navigate("/admin/doctors", 1000) : rol === 'DOCTOR'? navigate("/admin/doctors", 1000) : rol === 'PATIENT'? navigate("/patient/doctors", 1000) :  navigate("/doctors", 1000));

            }}
          >
            Buscar
          </button> */}
          {/* </Link> */}

          

        </div>

        <button
            class="flex items-center justify-center gap-2 font-poppins text-sm font-medium text-white bg-[#292F53] rounded-lg py-4 px-8 hover:bg-[#1479FF]"
            onClick={() => {
              handlerSearchButton();
              // setTimeout(navigate("/dummy/doctors", 1000));
            setTimeout( rol === 'ADMIN'? navigate("/admin/doctors", 1000) : rol === 'DOCTOR'? navigate("/admin/doctors", 1000) : rol === 'PATIENT'? navigate("/patient/doctors", 1000) :  navigate("/doctors", 1000));

            }}
          >
            <img src={iconSearch} alt="icon-search-button" className="w-6"/>
            Buscar
          </button>
        
        {/* <Link to={"/dummy/doctors"}> */}
        {/* <button
          class="text-sm font-medium text-white bg-blue-900 rounded-r-lg border border-blue-900 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-900 dark:hover:bg-blue-000"
          onClick={() => {
            handlerSearchButton();
            setTimeout(navigate("/doctors", 1000));
          }}
        >
          Buscar
        </button> */}
        {/* </Link> */}
{/*         </form> */}
          </div>
      </div>
     {/*  Especialidad: {answer}
      {resultadoP.length < 1 ? (
        <p>{error}</p>
      ) : (
        resultadoP.map((m) => (
          <p>
            <br />
            {m.name ? m.name : error}
          </p>
        ))
      )} */}
      </div>

    </div>
  );
}
