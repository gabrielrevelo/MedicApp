import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckOutForm from "./Vistas/Paciente/CheckOutForm";
import Home from "./Vistas/Compartido/Componentes/Home";
import DoctorsRoster from "./Vistas/Compartido/Componentes/Main/Listado/Roster";
import DetalleDoctor from "./Vistas/Compartido/Componentes/Main/DetalleDoctor";
import Registro from "./Vistas/Doctor/Componentes/Form";
import Stripe from "./Vistas/Paciente/StripeCheckOut"
import RegisterDoctor from "./Vistas/Doctor/Componentes/Form";
import RegisterPatient from "./Vistas/Paciente/Componentes/Form/index";
import Login from "./Vistas/Compartido/Componentes/Login/Login";
import PanelDoctor from "./Vistas/Doctor/Componentes/Panel/componentes";
import Dashboard from "./Vistas/Admin/componentes/Dashboard/Dashboard";
import { HOME, LOGIN,DOCTORS, PROFILE_ADMIN, LOGOUT_ADMIN, PROFILE_DOCTOR, HOME_DOCTOR, DOCTORS_DOCTOR, DOCTORS_ID_DOCTOR, LOGOUT_DOCTOR,  PROFILE_PATIENT, LOGOUT_PATIENT, REGISTER_DOCTOR, REGISTER_PATIENT, DOCTORS_ID, HOME_ADMIN, DOCTORS_ADMIN, DOCTORS_ID_ADMIN, HOME_PATIENT, DOCTORS_PATIENT, DOCTORS_ID_PATIENT, BUY_APPOINTMENT_PATIENT, } from "./context/config/routes/paths";
import Logout from "./context/components/Logout";
import PublicRoute from "./context/components/router/PublicRoutes";
import AdminRoute from "./context/components/router/AdminRoutes";
import DoctorRoute from "./context/components/router/DoctorRoutes";
import { AuthContextProvider } from "./context/authContext";
import Paciente from "./Vistas/Paciente/Componentes/Paciente";
import PatientRoute from "./context/components/router/PatientRoute";


function App() {
    return (
        <AuthContextProvider>
        <BrowserRouter>
            {/* <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dummy/doctors" element={<DoctorsRoster />} />
        <Route
          exact
          path="dummy/doctors/:idDoctor/stripe"
          element={<Stripe />}
        />
        <Route
          exact
          path="/dummy/doctors/:idDoctor"
          element={<DetalleDoctor />}
        />
        <Route exact path="/registerDoctor" element={<RegisterDoctor />} />
        <Route exact path="/registerPatient" element={<RegisterPatient />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/doctor/dashboard" element={<PanelDoctor />} />

        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes> */}

            {/* Proteccion de Rutas */}

            <Routes>
                <Route path="/" element={<PublicRoute/>}>
                    <Route  path={HOME} element={<Home />} />
                    <Route  path={LOGIN} element={<Login />} />
                    <Route  path={DOCTORS} element={<DoctorsRoster />} />
                    <Route  path={DOCTORS_ID} element={<DetalleDoctor />}/>
                    <Route  path={REGISTER_DOCTOR} element={<RegisterDoctor />} />
                    <Route  path={REGISTER_PATIENT} element={<RegisterPatient />} />


                </Route>

                <Route path="/admin" element={<AdminRoute/>}>
                    <Route  path={PROFILE_ADMIN} element={<Dashboard />} />
                    <Route  path={HOME_ADMIN} element={<Home />} />
                    <Route  path={DOCTORS_ADMIN} element={<DoctorsRoster />} />
                    <Route  path={DOCTORS_ID_ADMIN} element={<DetalleDoctor />}/>
                    <Route  path={LOGOUT_ADMIN} element={<Logout />} />

                </Route>

                <Route path="/doctor" element={<DoctorRoute/>}>
                    <Route  path={PROFILE_DOCTOR} element={<PanelDoctor />} />
                    <Route  path={HOME_DOCTOR} element={<Home />} />
                    <Route  path={DOCTORS_DOCTOR} element={<DoctorsRoster />} />
                    <Route  path={DOCTORS_ID_DOCTOR} element={<DetalleDoctor />}/>
                    <Route  path={LOGOUT_DOCTOR} element={<Logout />} />
                </Route>

                <Route path="/patient" element={<PatientRoute/>}>
                    <Route  path={PROFILE_PATIENT} element={<Paciente />} />
                    <Route  path={HOME_PATIENT} element={<Home />} />
                    <Route  path={DOCTORS_PATIENT} element={<DoctorsRoster />} />
                    <Route  path={DOCTORS_ID_PATIENT} element={<DetalleDoctor />}/>
                    <Route  path={LOGOUT_PATIENT} element={<Logout />} />
                    <Route  path={BUY_APPOINTMENT_PATIENT} element={<Stripe />}
        />
                </Route>

            </Routes>
        </BrowserRouter>
        </AuthContextProvider>
    );
}

export default App;
