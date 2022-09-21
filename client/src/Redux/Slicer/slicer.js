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
    profile: [],
    likes:false,
    // favoritos:[]
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
      const {speciality, city} = action.payload;
      if(!city && !speciality){
        state.newFilter = state.doctores.data;
      }
      if (city && speciality) {
        const filteredDoctors = state.doctores.data
              .filter((doctor) => doctor.city.includes(city))
              .filter((doctor) => doctor.specialities.includes(speciality));
        state.newFilter = filteredDoctors;
      }
      if (city && !speciality) {
        const filterDoctorByCities = state.doctores.data.filter((doctor) => doctor.city.includes(city));
        state.newFilter = filterDoctorByCities;
      }
      if (!city && speciality) {
        const filterDoctorBySpeciality = state.doctores.data.filter((doctor) => doctor.specialities.includes(speciality));
        state.newFilter = filterDoctorBySpeciality;
      }
    /*   if (action.payload.city && action.payload.speciality) {
        const filteredStates = state.doctores;
        const newFilter3 = filteredStates.data.filter((d) => {
          if (d.city.includes(city)) {
            return d;
          }
        });

      
        const newFilter4 = newFilter3
          ? newFilter3.filter((t) => {
              if (t.specialities.includes(speciality)) {
                return t;
              }
            })
          : state.doctores.data.filter((t) => {
              if (t.specialities.includes(speciality)) {
                return t;
              }
            });
        state.newFilter = newFilter4;
      } */
    },

    DoctorsByRating: (state, action) => {
      
      const doctors = state.newFilter;

      const byRating = doctors.sort((a, b) => {
        if(action.payload === "highest"){
          if (b.rating < a.rating) return -1;
          if (a.rating < b.rating) return 1;
          return 0;
        }
        else{
          if (a.rating < b.rating) return -1;
          if (b.rating < a.rating) return 1;
          return 0;
        }
      });
      state.newFilter = byRating;
    },
    DoctorsByPrice: (state, action) => {
      const doctors = state.newFilter;

      const byPrice = doctors.sort((a, b) => {
        if(action.payload === "highest"){
          if (b.checkUpPrice < a.checkUpPrice) return -1;
          if (a.checkUpPrice < b.checkUpPrice) return 1;
          return 0;
        }
        else{
          if (a.checkUpPrice < b.checkUpPrice) return -1;
          if (b.checkUpPrice < a.checkUpPrice) return 1;
          return 0;
        }
      });
      state.newFilter = byPrice;
    },
    getLikes : (state, action) => {
      state.likes = action.payload
    },
    // getfavoritos : (state, action) => {
    //   state.favoritos = action.payload
    // },
    clear: (state, action) =>{
      state.detail = action.payload
    }
  },
});

export const {
  getDoctorById,
  getAllDocs,
  getDoctorsBySpecialities,
  getDoctorsByCities,
  getDoctorsFiltered,
  getProfileDoctor,
  DoctorsByRating,
  DoctorsByPrice,
  getLikes,
  getfavoritos,
  clear
} = doctoresSlice.actions;

export default doctoresSlice.reducer;
