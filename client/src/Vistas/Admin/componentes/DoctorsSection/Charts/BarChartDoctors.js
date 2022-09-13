import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDoctorsBetweenDates } from '../../../../../Redux/actions/generalActionsDoctors';
import { Bar } from "react-chartjs-2";
import moment from 'moment';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement, 
  Title,
  Tooltip,
  Legend,
  Filler
);

const BarChartPatients = () => {
  const { querySearch } = useSelector((state) => state.generalDoctors);
  const dispatch = useDispatch();
  const finishDate = moment().startOf('day').format("YYYY-MM-DD");
  const startDate = moment().subtract(5, "days").format("YYYY-MM-DD");

  const data = {
    labels: querySearch.map((patient) => patient._id),
    datasets:[
      {
        label: "Doctores Registrados los últimos 5 días",
        data: querySearch.map((patient) => patient.count),
        tension: 0.3,
        backgroundColor: [
          'rgba(68, 186, 84,.4)',
          'rgba(41, 47, 83,.4)',
          'rgba(240, 125, 98,.4)',
          'rgba(92, 79, 183,.4)',
          'rgba(20, 121, 255,.4)',
        ],
        borderColor: [
          'rgba(250, 250, 250,.4)'
        ],
        borderWidth: 1
      },
    ],
  }

  useEffect(()=>{
    dispatch(getDoctorsBetweenDates(startDate, finishDate));
  },[]);

  return (
    <section>
      <Bar data={data}/>
    </section>
  )
}

export default BarChartPatients;
