import React, { useEffect,useState } from "react";
import Swal from "sweetalert2";
import moment from "moment";
import styles from "./Admins.module.css";
import iconTitle from "../../assets/ico-dark.png";
import avatarDefault from "../../assets/dashboard/default-avatar.jpg";
import iconAdd from "../../assets/dashboard/add-icon.svg";
import { useSelector, useDispatch } from "react-redux";
import { getAdmins, changeStatusAdmin, getAdmin } from "../../../../Redux/actions/generalActionsAdmins";
import Modal from "../Dashboard/Modal/Modal";
import Toggle from "../Dashboard/Toggle/Toggle";
import EditAdmin from "./EditAdmin";
import CreateAdmin from "./CreateAdmin";
import DetailAdmin from "./DetailAdmin";

const Admins = () => {
  const dispatch = useDispatch();
  const { admins, detailAdmin } = useSelector((state) => state.generalAdmins);
  const [status, setStatus] = useState(false);

  const initialState = {
    edit: false,
    create: false,
    detail: false
  }
  const [form, setForm] = useState(initialState);
  /**
   *  @changeStatus = Método para (dispatch) que cambia el estado del admin (Activo o Inactivo)
   *  @param => el id del Paciente
   *  @return => no retorna nada
   * */ 
  const changeStatus = (idAdmin, enable) => {
    dispatch(changeStatusAdmin(idAdmin, enable));
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
   *  @adminToEdit = Método para (dispatch) que edita al admin
   *  @param => el id del Admin
   *  @return => no retorna nada
   * */ 
/*   const adminToEdit = (idAdmin) => {
    dispatch(getAdmin(idAdmin));
    setForm({...form, edit:true});
  };
 */
   /**
   *  @adminDetail = Método para (dispatch) que ver el detalle del admin
   *  @param => el id del Admin
   *  @return => no retorna nada
   * */ 
    const adminDetail = (idAdmin) => {
      dispatch(getAdmin(idAdmin));
      setForm({...form, detail:true});
    };

  /**
   *  @return => re-render de todos los admins y cambia el state
   * */
  const reRenderAdmins = ()=> {
    dispatch(getAdmin());
    setForm(initialState);
  }
 
  /**
   *  @useEffect => todos los admins
   * */ 
  useEffect(() => {
    dispatch(getAdmins());
    return () => {
      setStatus(false);
    }
  }, [dispatch, form, status, admins]);

  return (
    <>
      <section className={styles.MainContainer}>
        <div className={styles.TitleContainer}>
          <h4 className={styles.Title}>
            <img src={iconTitle} alt="alt-img-title-icon" />
            Lista de Admins en <b>MedicApp</b>
          </h4>
          <button onClick={()=>setForm({edit:false, create:true})}>
            <img src={iconAdd} alt="Icon add" />
            Nuevo Admin
          </button>
        </div>

        <article className={styles.Card}>
          <div className={styles.Avatar}></div>
          <h5>Nombre Completo</h5>
          <span className={styles.Email}>Email</span>
          <span className={styles.Id}>ID</span>
          <span className={styles.Actions}>Creacion</span>
          <span className={styles.isToggle}>Estado</span>
          
        </article>

        {/** @edit => state: habilita el modal para editar un admin */}
        {form.edit &&
        <Modal>
          <EditAdmin id={detailAdmin._id} onClick={reRenderAdmins} name={detailAdmin.name} email={detailAdmin.email} phoneNumber={detailAdmin.phoneNumber}/>
        </Modal>
        }

        {/** @detail => state: habilita el modal para ver detalle de admin */}
        {form.detail &&
        <Modal>
          <DetailAdmin admin={detailAdmin} 
                      onClick={reRenderAdmins}
                      />
        </Modal>
        }

        {/** @create => state: habilita el modal para la creación de un admin */}
        {form.create &&
        <Modal>
          <CreateAdmin onClick={reRenderAdmins} />
        </Modal>
        }

        {/** @return => mapea todos los pacientes en el state admins */}
        { admins && admins.map((admin) => {
          return (
            <article className={styles.Card} key={admin._id}>
              <div className={styles.Avatar}>
                <img src={admin.image || avatarDefault} alt="avatar-img" />
              </div>
              <h5 onClick={() => adminDetail(admin._id)}>{admin.name}</h5>
              <span className={styles.Email}>{admin.email}</span>
              <span className={styles.Id}>{admin._id}</span>
              <span className={styles.Actions}>{moment(admin.createdAt).utc().format('MM/DD/YYYY')}</span>
              <div className={styles.isToggle}>
                <Toggle isToggle={admin.active ? true : false} onToggle={() => changeStatus(admin._id, !admin.active)}/>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Admins;
