
import axios from "axios";
import {
  getAllPatients,
  getPatientById,
  changeStatus,
  getPatientsByDates
} from "../Slicer/slicerGeneralPatients";

export const getPatient = (idPatient) => async (dispatch) => {
  try {
    if(!idPatient){
      return dispatch(getPatientById({}));
    }
    const patientById = await axios.get(`/patients/${idPatient}`);
    return dispatch(getPatientById(patientById.data.data));
  } catch (error) {
    console.log(error);
  }
};

export const getPatients = () => async (dispatch) => {
  try {
    const patients = await axios.get("/patients");
    return dispatch(getAllPatients(patients.data.data));
  } catch (error) {
    console.log(error);
  }
};

export const getPatientsBetweenDates = (startDate, finishDate) => async (dispatch) => {
  try {
    const patients = await axios.get(`/patients/data/queries/?startDate=${startDate}&finishDate=${finishDate}`);
    return dispatch(getPatientsByDates(patients.data));
  } catch (error) {
    console.log(error);
  }
};

export const changeStatusPatient = (idPatient) => async (dispatch) => {
  try {
    await axios.patch(`/patients/status/${idPatient}`);
    return dispatch(changeStatus());
  } catch (error) {
    console.log(error);
  }
};

export const editPatient = (idPatient, data) => async (dispatch) => {
  console.log("faaf", data);
  try {
    await axios.patch(`/patients/${idPatient}`, data);
    return;
  } catch (error) {
    console.log(error);
  }
};

export const postPatient = (data) => async (dispatch) => {
  try {
    await axios.post(`/patients/`, data);
    return;
  } catch (error) {
    console.log(error);
  }
};

