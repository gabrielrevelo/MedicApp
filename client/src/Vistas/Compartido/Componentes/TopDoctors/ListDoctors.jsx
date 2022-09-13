import React from 'react';
import styles from "./TopDoctors.module.css";
import TopDoctors from './TopDoctors';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTopDoctorsHome } from '../../../../Redux/actions/generalActionsDoctors';

const ListDoctors = () => {

  const { topDoctors } = useSelector((state) => state.generalDoctors);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getTopDoctorsHome());
  },[]);

  return (
    <section className={styles.MainContainer}>
    <h2 className={styles.TitleCards}>Médicos <b>Top</b></h2>
    <section className={styles.ContainerCards}>
      {topDoctors && topDoctors?.map((doctor) => {
        return(
          <TopDoctors
          key = {doctor._id} 
          id = {doctor._id}
          name = {doctor.name}
          specialities = {doctor.specialities}
          rating = {doctor.rating}
          schedule = {doctor.schedule.hour}
          address = {doctor.address}
          image = {doctor.image}
          />
        )
      })}
    </section>
    </section>
  )
}

export default ListDoctors;