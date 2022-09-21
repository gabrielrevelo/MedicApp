
import axios from "axios";
import {
  getAllDoctors,
  getDoctorById,
  changeStatus,
  getDoctorsByDates,
  getTopDoctors
} from "../Slicer/slicerGeneralDoctors";

export const getDoctor = (idDoctor) => async (dispatch) => {
  try {
    if(!idDoctor){
      return dispatch(getDoctorById({}));
    }
    const patientById = await axios.get(`/doctors/${idDoctor}`);
    return dispatch(getDoctorById(patientById.data.data));
  } catch (error) {
    console.log(error);
  }
};

export const getDoctors = () => async (dispatch) => {
  try {
    
    const patients = await axios.get("/doctors/?rol=admin");
    return dispatch(getAllDoctors(patients.data.data));
  } catch (error) {
    console.log(error);
  }
};

export const changeStatusDoctor = (idDoctor) => async (dispatch) => {
  try {
    await axios.patch(`/doctors/status/${idDoctor}`);
    return dispatch(changeStatus());
  } catch (error) {
    console.log(error);
  }
};

export const editDoctor = (idDoctor, data) => async (dispatch) => {
  console.log("faaf", data);
  try {
    await axios.patch(`/doctors/${idDoctor}`, data);
    return;
  } catch (error) {
    console.log(error);
  }
};

export const getDoctorsBetweenDates = (startDate, finishDate) => async (dispatch) => {
  try {
    const doctors = await axios.get(`/doctors/data/queries/?startDate=${startDate}&finishDate=${finishDate}`);
    return dispatch(getDoctorsByDates(doctors.data));
  } catch (error) {
    console.log(error);
  }
};

export const postDoctor = (data) => async (dispatch) => {
  try {
    await axios.post(`/doctors/`, data);
    return;
  } catch (error) {
    console.log(error);
  }
};

export const getTopDoctorsHome = () => async (dispatch) => {
  try {
    const doctors = await axios.get(`/doctors/data/top`);
    return dispatch(getTopDoctors(doctors.data));
  } catch (error) {
    console.log(error);
  }
};
