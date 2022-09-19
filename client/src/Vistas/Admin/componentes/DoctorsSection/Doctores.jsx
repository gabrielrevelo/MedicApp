import React, { useEffect,useState } from "react";
import styles from "./Doctores.module.css";
import Swal from "sweetalert2";
import iconTitle from "../../assets/ico-dark.png";
import avatarDefault from "../../assets/dashboard/default-avatar.jpg";
import iconAdd from "../../assets/dashboard/add-icon.svg";

import { useSelector, useDispatch } from "react-redux";
import Modal from "../Dashboard/Modal/Modal";
import Toggle from "../Dashboard/Toggle/Toggle";
import EditDoctor from "./EditDoctor";
import CreateDoctor from "./CreateDoctor";
import DetailDoctor from "./DetailDoctor";

import { changeStatusDoctor, getDoctor, getDoctors} from "../../../../Redux/actions/generalActionsDoctors";

const Doctores = () => {
  const dispatch = useDispatch();
  const { doctors, detailDoctor } = useSelector((state) => state.generalDoctors);
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
  const changeStatus = (idDoctor) => {
    dispatch(changeStatusDoctor(idDoctor));
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
   *  @doctorToEdit = Método para (dispatch) que edita al doctor
   *  @param => el id del Doctor
   *  @return => no retorna nada
   * */ 
  const doctorToEdit = (idDoctor) => {
    dispatch(getDoctor(idDoctor));
    setForm({...form, edit:true});
  };

  /**
   *  @doctorDetail = Método para (dispatch) que muestra detalles del doctor
   *  @param => el id del Doctor
   *  @return => no retorna nada
   * */ 
   const doctorDetail = (idDoctor) => {
    dispatch(getDoctor(idDoctor));
    setForm({...form, detail:true});
  };


  /**
   *  @return => re-render de todos los pacientes y cambia el state edit
   * */
  const reRenderDoctors = ()=> {
    dispatch(getDoctor());
    setForm(initialState);
  }
 
  /**
   *  @useEffect => todos los doctores
   * */ 
  useEffect(() => {
    dispatch(getDoctors());
    return () => {
      setStatus(false);
    }
  }, [dispatch, form, status, doctors]);

  return (
    <>
      <section className={styles.MainContainer}>
        <div className={styles.TitleContainer}>
          <h4 className={styles.Title}>
            <img src={iconTitle} alt="alt-img-title-icon" />
            Lista de Doctores en <b>MedicApp</b>
          </h4>
          <button onClick={()=>setForm({edit:false, create:true})}>
            <img src={iconAdd} alt="Icon add" />
            Nuevo Doctor
          </button>
        </div>

        <article className={styles.Card}>
          <div className={styles.Avatar}></div>
          <h5>Nombre Completo</h5>
          <span className={styles.Email}>Email</span>
          <span className={styles.PhoneNumber}>Ciudad</span>
          <span className={styles.isToggle}>Estado</span>
          <div className={styles.Actions}>
            <span>Acciones</span>
          </div>
        </article>

        {/** @edit => state: habilita el modal para editar un paciente */}
        {form.edit &&
        <Modal>
          <EditDoctor id={detailDoctor._id} 
                      onClick={reRenderDoctors}
                      name={detailDoctor.name}
                      email={detailDoctor.email}
                      phoneNumber={detailDoctor.phoneNumber}
                      license={detailDoctor.license}
                      address={detailDoctor.address}/>
        </Modal>
        }

        {/** @detail => state: habilita el modal para ver detalle de paciente */}
        {form.detail &&
        <Modal>
          <DetailDoctor doctor={detailDoctor} 
                      onClick={reRenderDoctors}
                      />
        </Modal>
        }

        {/** @create => state: habilita el modal para la creación de un doctor */}
        {form.create &&
        <Modal>
          <CreateDoctor onClick={reRenderDoctors} />
        </Modal>
        }

        {/** @return => mapea todos los doctores en el state doctors */}
        { doctors && doctors.map((doctor) => {
          return (
            <article className={styles.Card} key={doctor._id}>
              <div className={styles.Avatar}>
                <img src={doctor.image || avatarDefault} alt="avatar-img" />
              </div>
              <h5 onClick={() => doctorDetail(doctor._id)}>{doctor.name}</h5>
              <span className={styles.Email}>{doctor.email}</span>
              <span className={styles.PhoneNumber}>{doctor.city}</span>
              <div className={styles.isToggle}>
                <Toggle isToggle={doctor.active ? true : false} onToggle={() => changeStatus(doctor._id)}/>
              </div>
              <div className={styles.Actions}>
                <button className={styles.ButtonEdit} onClick={()=>doctorToEdit(doctor._id)}>Editar</button>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Doctores;
