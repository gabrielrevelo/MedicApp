import React, {useState} from "react";
import Swal from "sweetalert2";
import styles from "./SectionsAdmins.module.css";
import iconClose from "../../assets/dashboard/close-icon.svg";
import iconInput from "../../assets/dashboard/input-icon.svg";
import { useDispatch } from "react-redux";
import { postAdmin } from "../../../../Redux/actions/generalActionsAdmins";
import { validateInput } from "../../helpers/regexValidationsInputs";

const CreateAdmin = ({onClick}) => {
  const dispatch = useDispatch();

  const initialInputs = {
    name: "",
    email: "",
    password: "",
    image: ""
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
      }, "create")
    );
    console.log(input);
  };
  
    

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !inputErrors.name &&
      !inputErrors.email &&
      !inputErrors.image &&
      !inputErrors.password
    ) {
      dispatch(postAdmin(input));
      setInput(initialInputs);
      onClick();
      Swal.fire({
        title: 'Creación Exitosa',
        text: 'Se agregó el administrador.',
        icon: 'success',
        iconColor: '#1479FF',
        confirmButtonColor: '#1479FF',
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'No se pudo agregar el admin.',
        icon: 'error',
        iconColor: '#E25241',
        confirmButtonColor: '#E25241',
      });
    }
  };

  
  return (
    <form className={styles.Form} onSubmit={(e) => {handleSubmit(e);}}>
          <img src={iconClose} alt="alt-close-icon" className={styles.ButtonClose} onClick={onClick}/>
          <h2 className={styles.TitleModal}>Crear un Admin</h2>
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
              placeholder="Escribe tu nombre..."
              value={input.name}
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
              placeholder="Escribe tu email..."
              value={input.email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className={styles.InputContainer}>
            <span
              className={inputErrors.password ? styles.Errors : styles.NoErrors}
            >
              {inputErrors.password}
            </span>
            <label><img src={iconInput} alt="icon-label-input" />Password:</label>
            <input
              className={styles.Input}
              type="password"
              name="password"
              placeholder="Escribe tu password..."
              value={input.password}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className={styles.InputContainer}>
            <span
              className={inputErrors.image ? styles.Errors : styles.NoErrors}
            >
              {inputErrors.image}
            </span>
            <label><img src={iconInput} alt="icon-label-input" />Foto:</label>
            <input
              className={styles.Input}
              type="text"
              name="image"
              placeholder="Url de tu foto..."
              value={input.image}
              onChange={(e) => handleChange(e)}
            />
          </div>

      <button className={styles.ButtonSubmit} type="submit">
        Crear Admin
      </button>

    </form>
  );
};


export default CreateAdmin;