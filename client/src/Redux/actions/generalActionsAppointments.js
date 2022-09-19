
import axios from "axios";
import {
  getAllAppointments,
  getAppointmentById,
  getAppointmentsByQuery
} from "../Slicer/slicerGeneralAppointments";

export const getAppointment = (idAppointment) => async (dispatch) => {
  try {
    if(!idAppointment){
      return dispatch(getAppointmentById({}));
    }
    const appointmentById = await axios.get(`/appointments/${idAppointment}`);
    return dispatch(getAppointmentById(appointmentById.data.data));
  } catch (error) {
    console.log(error);
  }
};

export const getAppointments = () => async (dispatch) => {
  try {
    const appointments = await axios.get("/appointments");
    console.log(appointments);
    return dispatch(getAllAppointments(appointments.data.data));
  } catch (error) {
    console.log(error);
  }
};

export const getAppointmentsBySearch = (query) => async (dispatch) => {
  try {
    return dispatch(getAppointmentsByQuery(query));
  } catch (error) {
    console.log(error);
  }
};


