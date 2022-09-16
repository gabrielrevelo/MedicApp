import React, { useState, useEffect } from "react";
import styles from "../../TopDoctors/TopDoctors.module.css";
import NotFound from "../../../imagenes compartidas/vector-not-found.png";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../Header/NavBar";
import { getDocsFiltered } from "../../../../../Redux/actions/doctorActions";
import Pagination from "./Pagination";
import TopDoctors from "../../TopDoctors/TopDoctors";
import Filters from "./Filters";

export default function DoctorsRoster() {
  const dispatch = useDispatch();
  const allBadges = useSelector((state) => state.doctores.newFilter);
  const [badgesPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastBadge = currentPage * badgesPerPage;
  const indexOfFirstBadge = indexOfLastBadge - badgesPerPage;
  const displayedBadges = allBadges.slice(indexOfFirstBadge, indexOfLastBadge);

  const pages = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getDocsFiltered());
    return () => {
      sessionStorage.removeItem('actualSearch');
    }
  }, [dispatch]);

  return (
    <>
    <NavBar/>
    <main className={styles.MainContainer}>
      <section className={styles.FilterContainer}>  
        <Filters/> 
      </section>
      <h2 className={styles.CountSearch}>{allBadges.length === 0 ? `No se encontraron resultados a su busqueda` : `Se encontraron ${allBadges.length} resultados a su busqueda`}</h2>
      <section className={styles.ContainerCards}>
        {displayedBadges.length === 0 ? <img className={styles.NotFound} src={NotFound} alt="not-found"/>  : displayedBadges.map((doctor) => {

          return (
            <TopDoctors 
            key = {doctor._id} 
            id = {doctor._id}
            name = {doctor.name}
            specialities = {doctor.specialities}
            rating = {doctor.rating}
            schedule = {doctor.schedule.hour}
            address = {doctor.address}
            image = {doctor.image}
            price = {doctor.checkUpPrice}
            details = {"Full"}
            />
          );
        })}
      </section>
      <section className="flex flex-col items-center">
        <Pagination
          badgesPerPage={badgesPerPage}
          allBadges={allBadges.length}
          pages={pages}
        />
      </section>
    </main>
    </>
  );
}
