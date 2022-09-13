import { createSlice } from "@reduxjs/toolkit";

export const generalDoctorSlice = createSlice({
  name: "generalDoctors",
  initialState: {
    doctors: [],
    detailDoctor: {},
    specialities: [],
    querySearch: [],
    topDoctors: []
  },
  reducers: {
    getAllDoctors: (state, action) => {
      state.doctors = action.payload;
    },

    getDoctorById: (state, action) => {
      state.detailDoctor = action.payload;
    },

    getDoctorsByDates: (state, action) => {
      state.querySearch = action.payload;
    },

    getTopDoctors: (state, action) => {
      state.topDoctors = action.payload;
    },

    changeStatus: (state) => {
      return state;
    },

    editDoctor: (state) => {
      return state;
    },

    postDoctor: (state) => {
      return state;
    },
  },
});

export const {
  getAllDoctors,
  getDoctorById,
  changeStatus,
  editDoctor,
  postDoctor,
  getDoctorsByDates,
  getTopDoctors
} = generalDoctorSlice.actions;

export default generalDoctorSlice.reducer;
