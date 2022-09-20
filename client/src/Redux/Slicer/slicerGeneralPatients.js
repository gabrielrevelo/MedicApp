import { createSlice } from "@reduxjs/toolkit";

export const generalPatientsSlice = createSlice({
  name: "patients",
  initialState: {
    patients: [],
    detailPatient: {},
    querySearch:[],
    profile:{},
    favoritos:[],
  },
  reducers: {
    getAllPatients: (state, action) => {
      state.patients = action.payload;
    },

    getPatientById: (state, action) => {
      state.detailPatient = action.payload;
    },

    getPatientsByDates: (state, action) => {
      state.querySearch = action.payload;
    },

    getPatientProfile: (state, action) => {
      state.profile = action.payload;
    },

    changeStatus: (state) => {
      return state;
    },

    editPatient: (state) => {
      return state;
    },

    postPatient: (state) => {
      return state;
    },
    getfavoritos : (state, action) => {
      state.favoritos = action.payload
    },
    clear: (state, action) =>{
      state.favoritos = []
    }
  },
});

export const {
  getAllPatients,
  getPatientById,
  changeStatus,
  editPatient,
  postPatient,
  getPatientsByDates,
  getPatientProfile,
  getfavoritos,
  clear
} = generalPatientsSlice.actions;

export default generalPatientsSlice.reducer;
