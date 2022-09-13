import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavBar from "../../Header/NavBar";
import { getDocsFiltered } from "../../../../../Redux/actions/doctorActions";
import DoctorBadge from "./Badge";
import Pagination from "./Pagination";

export default function DoctorsRoster() {
  const dispatch = useDispatch();
  const allBadges = useSelector((state) => state.doctores.newFilter);
  const [badgesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState("")

  const indexOfLastBadge = currentPage * badgesPerPage;
  const indexOfFirstBadge = indexOfLastBadge - badgesPerPage;
  const displayedBadges = allBadges.slice(indexOfFirstBadge, indexOfLastBadge);

  const pages = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getDocsFiltered());
    setError("No se encontraron resultados para su busqueda")
  }, []);

  const rol = JSON.parse(sessionStorage.getItem('Rol'))
  

  return (
    <main className=' min-h-screen bg-[#E7EFFD] bg-repeat'>
      <NavBar/>

      <article className="flex flex-col gap-6 p-6 items-center">
        {displayedBadges.length < 1 ? <p>{error}</p>  : displayedBadges.map((e) => {

          return (
            <Link to={ rol === 'ADMIN' ?  `/admin/doctors/${e._id}` : rol === 'DOCTOR' ?  `/doctor/doctors/${e._id}` : rol === 'PATIENT' ?  `/patient/doctors/${e._id}` : `/doctors/${e._id}`  }>
              <DoctorBadge
                key={e._id}
                name={e.name}
                specialties={e.specialities.join(", ")}
                image= {e.image}
              />
            </Link>
          );
        })}
      </article>
      <section className="flex flex-col items-center">
        <Pagination
          badgesPerPage={badgesPerPage}
          allBadges={allBadges.length}
          pages={pages}
        />
      </section>
    </main>
  );
}
