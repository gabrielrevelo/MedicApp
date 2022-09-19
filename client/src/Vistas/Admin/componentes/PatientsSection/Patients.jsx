import React, { useEffect,useState } from "react";
import Swal from "sweetalert2";
import styles from "./Patients.module.css";
import iconTitle from "../../assets/ico-dark.png";
import avatarDefault from "../../assets/dashboard/default-avatar.jpg";
import iconAdd from "../../assets/dashboard/add-icon.svg";

import { useSelector, useDispatch } from "react-redux";
import { getPatients, changeStatusPatient, getPatient } from "../../../../Redux/actions/generalActionsPatients";
import Modal from "../Dashboard/Modal/Modal";
import Toggle from "../Dashboard/Toggle/Toggle";
import EditPatient from "./EditPatient";
import CreatePatient from "./CreatePatient";
import DetailPatient from "./DetailPatient";

const Patients = () => {
  const dispatch = useDispatch();
  const { patients, detailPatient } = useSelector((state) => state.generalPatients);
  const [status, setStatus] = useState(false);

  const initialState = {
    edit: false,
    create: false,
    detail: false
  }
  const [form, setForm] = useState(initialState);
  /**
   *  @changeStatus = Método para (dispatch) que cambia el estado del paciente (Activo o Inactivo)
   *  @param => el id del Paciente
   *  @return => no retorna nada
   * */ 
  const changeStatus = (idPatient) => {
    dispatch(changeStatusPatient(idPatient));
    Swal.fire({
      position: 'center',
      icon: 'success',
      iconColor: '#1479FF',
      title: 'Cambió el estado del admin',
      showConfirmButton: false,
      timer: 1300
    });
    setStatus(true);
  };

  /**
   *  @patientToEdit = Método para (dispatch) que edita al paciente
   *  @param => el id del Paciente
   *  @return => no retorna nada
   * */ 
  const patientToEdit = (idPatient) => {
    dispatch(getPatient(idPatient));
    setForm({...form, edit:true});
  };

   /**
   *  @patientDetail = Método para (dispatch) que ver el detalle del paciente
   *  @param => el id del Doctor
   *  @return => no retorna nada
   * */ 
    const patientDetail = (idDoctor) => {
      dispatch(getPatient(idDoctor));
      setForm({...form, detail:true});
    };

  /**
   *  @return => re-render de todos los pacientes y cambia el state edit
   * */
  const reRenderPatients = ()=> {
    dispatch(getPatient());
    setForm(initialState);
  }
 
  /**
   *  @useEffect => todos los pacientes
   * */ 
  useEffect(() => {
    dispatch(getPatients());
    return () => {
      setStatus(false);
    }
  }, [dispatch, form, status, patients]);

  return (
    <>
      <section className={styles.MainContainer}>
        <div className={styles.TitleContainer}>
          <h4 className={styles.Title}>
            <img src={iconTitle} alt="alt-img-title-icon" />
            Lista de Pacientes en <b> MedicApp</b>
          </h4>
          <button onClick={()=>setForm({edit:false, create:true})}>
            <img src={iconAdd} alt="Icon add" />
            Nuevo Paciente
          </button>
        </div>

        <article className={styles.Card}>
          <div className={styles.Avatar}></div>
          <h5>Nombre Completo</h5>
          <span className={styles.Email}>Email</span>
          <span className={styles.PhoneNumber}>Teléfono</span>
          <span className={styles.isToggle}>Estado</span>
          <div className={styles.Actions}>
            <span>Acciones</span>
          </div>
        </article>

        {/** @edit => state: habilita el modal para editar un paciente */}
        {form.edit &&
        <Modal>
          <EditPatient id={detailPatient._id} onClick={reRenderPatients} name={detailPatient.name} email={detailPatient.email} phoneNumber={detailPatient.phoneNumber}/>
        </Modal>
        }

        {/** @detail => state: habilita el modal para ver detalle de paciente */}
        {form.detail &&
        <Modal>
          <DetailPatient patient={detailPatient} 
                      onClick={reRenderPatients}
                      />
        </Modal>
        }

        {/** @create => state: habilita el modal para la creación de un paciente */}
        {form.create &&
        <Modal>
          <CreatePatient onClick={reRenderPatients} />
        </Modal>
        }

        {/** @return => mapea todos los pacientes en el state patients */}
        { patients && patients.map((patient) => {
          return (
            <article className={styles.Card} key={patient._id}>
              <div className={styles.Avatar}>
                <img src={patient.image || avatarDefault} alt="avatar-img" />
              </div>
              <h5 onClick={() => patientDetail(patient._id)}>{patient.name}</h5>
              <span className={styles.Email}>{patient.email}</span>
              <span className={styles.PhoneNumber}>{patient.phoneNumber}</span>
              <div className={styles.isToggle}>
                <Toggle isToggle={patient.active ? true : false} onToggle={() => changeStatus(patient._id)}/>
              </div>
              <div className={styles.Actions}>
                <button className={styles.ButtonEdit} onClick={()=>patientToEdit(patient._id)}>Editar</button>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Patients;
