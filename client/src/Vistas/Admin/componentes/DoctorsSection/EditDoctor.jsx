import React, {useState} from "react";
import Swal from "sweetalert2";
import styles from "./SectionsDoctors.module.css";
import iconClose from "../../assets/dashboard/close-icon.svg";
import iconInput from "../../assets/dashboard/input-icon.svg";
import { useDispatch } from "react-redux";
import { editDoctor } from "../../../../Redux/actions/generalActionsDoctors";
import { validateInput } from "../../helpers/regexValidationsInputs";

const EditDoctor = ({id, onClick, name, email, phoneNumber, license, address}) => {
  const dispatch = useDispatch();

  const initialInputs = {
    name: "",
    email: "",
    phoneNumber: "",
    license: "",
    address: ""
  };

  const [input, setInput] = useState(initialInputs);
  const [inputErrors, setInputErrors] = useState({});

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setInputErrors(
      validateInput({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    console.log(input);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const values = {};
    const props = Object.keys(input);
    if (
      !inputErrors.name &&
      !inputErrors.email &&
      !inputErrors.phoneNumber &&
      !inputErrors.license &&
      !inputErrors.address 
    ) {
      props.forEach((value) => {
        if (!input[value] === "") {
          values[value] = input[value];
        }
      });
      dispatch(editDoctor(id,values));
      setInput(initialInputs);
      onClick();
      Swal.fire({
        title: 'Edicion Exitosa',
        text: 'Se editó el doctor correctamente',
        icon: 'success',
        iconColor: '#1479FF',
        confirmButtonColor: '#1479FF',
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'No se pudo editar el doctor.',
        icon: 'error',
        iconColor: '#E25241',
        confirmButtonColor: '#E25241',
      });
    }
  };

  return (
    <section className={styles.Form}>
          <img src={iconClose} alt="alt-close-icon" className={styles.ButtonClose} onClick={onClick}/>
          <h2 className={styles.TitleModal}>Editar Doctor</h2>
          <div className={styles.InputContainer}>
            <span
              className={inputErrors.name ? styles.Errors : styles.NoErrors}
            >
              {inputErrors.name}
            </span>
            <label><img src={iconInput} alt="icon-label-input" />Nombre:</label>
            <input
              className={styles.Input}
              type="text"
              name="name"
              placeholder={name}
              value={input.name || name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className={styles.InputContainer}>
            <span
              className={inputErrors.email ? styles.Errors : styles.NoErrors}
            >
              {inputErrors.email}
            </span>
            <label><img src={iconInput} alt="icon-label-input" />Email:</label>
            <input
              className={styles.Input}
              type="text"
              name="email"
              placeholder={email}
              value={input.email || email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className={styles.InputContainer}>
            <span
              className={inputErrors.phoneNumber ? styles.Errors : styles.NoErrors}
            >
              {inputErrors.phoneNumber}
            </span>
            <label><img src={iconInput} alt="icon-label-input" />Teléfono:</label>
            <input
              className={styles.Input}
              type="text"
              name="phoneNumber"
              placeholder={phoneNumber}
              value={input.phoneNumber || phoneNumber}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className={styles.InputContainer}>
            <span
              className={inputErrors.license ? styles.Errors : styles.NoErrors}
            >
              {inputErrors.license}
            </span>
            <label><img src={iconInput} alt="icon-label-input" />Licencia Médica:</label>
            <input
              className={styles.Input}
              type="text"
              name="license"
              placeholder={license}
              value={input.license || license}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className={styles.InputContainer}>
            <span
              className={inputErrors.address ? styles.Errors : styles.NoErrors}
            >
              {inputErrors.address}
            </span>
            <label><img src={iconInput} alt="icon-label-input" />Dirección de Consulta:</label>
            <input
              className={styles.Input}
              type="text"
              name="address"
              placeholder={address}
              value={input.address || address}
              onChange={(e) => handleChange(e)}
            />
          </div>
          
      <button className={styles.ButtonSubmit} onClick={(e) => handleSubmit(e)}>
        Editar Doctor
      </button>

    </section>
  );
};

export default EditDoctor;
