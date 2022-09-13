import { createSlice } from "@reduxjs/toolkit";

export const doctoresSlice = createSlice({
  name: "doctores",
  initialState: {
    doctores: [],
    filteredDoctors: [],
    detail: {},
    cities: [],
    filteredByCities: [],
    newFilter: [], 
    specialities: [],
    profile: []
  },
  reducers: {
    getAllDocs: (state, action) => {
      state.doctores = action.payload;

      let ciudades = [];
      let ciudadesData = state.doctores.data.filter((d) => {
        if (!ciudades.includes(d.city)) {
          return ciudades.push(d.city);
        }
      });

      state.cities = ciudades;

      let especialidad = [];
      let especialMaped = [];
      let especialidadData = state.doctores.data.filter((r) => {
        if (r.specialities) {
          r.specialities.map((g) => {
            if (!especialidad.includes(g)) return especialidad.push(g);
          });
        }
      });

      state.specialities = especialidad;
    },
    getDoctorById: (state, action) => {
      state.detail = action.payload;
    },

    getProfileDoctor: (state, action) => {
      state.profile = action.payload
    },
   
    getDoctorsFiltered: (state, action) => {
      const specialities = action.payload.specialities;
      const cities = action.payload.cities;
      if (action.payload.cities) {
        const filteredStates = state.doctores;
        const newFilter3 = filteredStates.data.filter((d) => {
          if (d.city.includes(cities)) {
            return d;
          }
        });
        state.newFilter = newFilter3;
      }
      if (action.payload.specialities) {
        const newFilter4 = state.doctores.data.filter((t) => {
          if (t.specialities.includes(specialities)) {
            return t;
          }
        });
        state.newFilter = newFilter4;
      }
      if (action.payload.cities && action.payload.specialities) {
        const filteredStates = state.doctores;
        const newFilter3 = filteredStates.data.filter((d) => {
          if (d.city.includes(cities)) {
            return d;
          }
        });

      
        const newFilter4 = newFilter3
          ? newFilter3.filter((t) => {
              if (t.specialities.includes(specialities)) {
                return t;
              }
            })
          : state.doctores.data.filter((t) => {
              if (t.specialities.includes(specialities)) {
                return t;
              }
            });
        state.newFilter = newFilter4;
      }
    },
  },
});

export const {
  getDoctorById,
  getAllDocs,
  getDoctorsBySpecialities,
  getDoctorsByCities,
  getDoctorsFiltered,
  getProfileDoctor
} = doctoresSlice.actions;

export default doctoresSlice.reducer;
