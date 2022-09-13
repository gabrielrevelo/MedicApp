import { createSlice } from "@reduxjs/toolkit";

export const generalAppointmentSlice = createSlice({
  name: "generalAppointments",
  initialState: {
    appointments: [],
    detailAppointment: {},
    appointmentsFiltered:[]
  },
  reducers: {
    getAllAppointments: (state, action) => {
      state.appointments = action.payload;
      state.appointmentsFiltered = state.appointments;
    },

    getAppointmentById: (state, action) => {
      state.detailAppointment = action.payload;
    },

    getAppointmentsByQuery: (state, action) => {
      const filtered = state.appointments;
      const query = action.payload.toLowerCase();
      console.log(query);
      const result = filtered.filter(
          (appointment) =>
            appointment.patient.name.toLowerCase().includes(query) ||
            appointment.doctor.name.toLowerCase().includes(query)
      );
      state.appointmentsFiltered = result;
    },
  },
});

export const {
  getAllAppointments,
  getAppointmentById,
  getAppointmentsByQuery
} = generalAppointmentSlice.actions;

export default generalAppointmentSlice.reducer;
