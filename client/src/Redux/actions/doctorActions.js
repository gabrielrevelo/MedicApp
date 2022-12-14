
import axios from "axios";
import {
  getDoctorById,
  getAllDocs,
  getDoctorsBySpecialities,
  getDoctorsByCities,
  getDoctorsFiltered,
  getProfileDoctor,
  DoctorsByRating,
  DoctorsByPrice,
  getLikes,
  clear
} from "../Slicer/slicer";

export const getDocbyId = (id) => (dispatch) => {
  axios
    .get(`/doctors/${id}`)
    .then((res) => dispatch(getDoctorById(res.data)))
    .catch((e) => console.log(e));
};

export const getDocs = () => (dispatch) => {
  axios
    .get("/doctors")
    .then((res) => dispatch(getAllDocs(res.data)))
    .catch((e) => console.log(e));
};

export const getDocsBySpecialities = (type) => (dispatch) => {
  try {
    dispatch(getDoctorsBySpecialities(type));
  } catch (e) {}
};

export const getDocsByCities = (type) => (dispatch) => {
  try {
    dispatch(getDoctorsByCities(type));
  } catch (e) {}
};

export const getDocsFiltered = (type) => (dispatch) => {
  try {
    dispatch(getDoctorsFiltered(type));
  } catch (e) {}
};

export const getProfileDoc = () => async (dispatch) => {
  const token2 = window.localStorage.getItem('auth-token')
  try {
    const {data} = await axios.get('/profile/doctor', {
      //headers: { Authorization: `Bearer ${token}`}
      headers: { Authorization: `Bearer ${JSON.parse(token2)}`}
    });
    dispatch(getProfileDoctor(data))
    // console.log('entro a la accion',data);
  } catch (error) {
    return error
    }
};

export const sortDocsByRating = (type) => (dispatch) => {
  try {
    dispatch(DoctorsByRating(type));
  } catch (e) {}
};

export const sortDocsByPrice = (type) => (dispatch) => {
  try {
    dispatch(DoctorsByPrice(type));
  } catch (e) {}
};


export const likesDoctor = (doctorId) => async (dispatch) => {
  try {
    const {data} = await axios.get(`http://localhost:3004/favorites/likes/${doctorId}`, {
      //headers: { Authorization: `Bearer ${token}`}
      headers: { Authorization: `Bearer ${JSON.parse(window.localStorage.getItem('auth-token'))}`}
    });
    dispatch(getLikes(data.data[0].enable))
    console.log('estebanaaa',data.data[0].enable);
  } catch (error) {
    console.log(error)
  }
};

export const getClear = () => (dispatch) => {
  try {
    dispatch(clear({}));
  } catch (e) {}
}

// const { data } = await axios.put(`${RUTA_APP}users/logout`, {}, {
//   headers: { Authorization: `Bearer ${localStorage.getItem('auth-token')}` }
// });

