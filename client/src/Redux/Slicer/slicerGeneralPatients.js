import { createSlice } from "@reduxjs/toolkit";

export const generalPatientsSlice = createSlice({
  name: "patients",
  initialState: {
    patients: [],
    detailPatient: {},
    querySearch:[]
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

    changeStatus: (state) => {
      return state;
    },

    editPatient: (state) => {
      return state;
    },

    postPatient: (state) => {
      return state;
    },
  },
});

export const {
  getAllPatients,
  getPatientById,
  changeStatus,
  editPatient,
  postPatient,
  getPatientsByDates
} = generalPatientsSlice.actions;

export default generalPatientsSlice.reducer;
