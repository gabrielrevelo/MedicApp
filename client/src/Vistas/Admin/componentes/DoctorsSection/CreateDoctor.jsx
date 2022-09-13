import React, { useState } from "react";
import styles from "./SectionsDoctors.module.css";
import iconClose from "../../assets/dashboard/close-icon.svg";
import iconInput from "../../assets/dashboard/input-icon.svg";
import { useDispatch } from "react-redux";
import { postDoctor } from "../../../../Redux/actions/generalActionsDoctors";
import { validateInput } from "../../helpers/regexValidationsInputs";

const CreateDoctor = ({ onClick }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  
  const specialities = [
    "Alergología",
    "Anestesiología",
    "Cardiología",
    "Endocrinología",
    "Geriatría",
    "Hematología",
  ];

  const initialInputs = {
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    image: "",
    license: "",
    address: "",
    city: "",
    country: "",
    hour: "",
    checkUpPrice: "",
    specialities: [],
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

  const handleSelect = (e) => {
    if (!input[e.target.name].includes(e.target.value)) {
      setInput({
        ...input,
        [e.target.name]: [...input[e.target.name], e.target.value],
      });
      setInputErrors(
        validateInput({
          ...input,
          [e.target.name]: [...input[e.target.name], e.target.value],
        })
      );
    }
  };

  const removeList = (e, index) => {
    e.preventDefault();
    console.log(e.target.name);
    const list = [...input[e.target.name]];
    list.splice(index, 1);
    setInput({
      ...input,
      [e.target.name]: [...list],
    });

    setInputErrors(
      validateInput({
        ...input,
        [e.target.name]: [...list],
      })
    );
  };

  const nextContainer = () =>{
    const first = document.getElementById("FirstContainer");
    const second = document.getElementById("SecondContainer");
    const third = document.getElementById("ThirdContainer");
    if(count === 1){
      first.classList.add(styles['Inactive']);
      second.classList.add(styles['Active']);
    }
    if(count === 2){
      second.classList.add(styles['Inactive']);
      third.classList.add(styles['Active']);
    }
    setCount(count+1);
  }

  /** Basic Regex for Validate Inputs */

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !inputErrors.name &&
      !inputErrors.email &&
      !inputErrors.phoneNumber &&
      !inputErrors.image &&
      !inputErrors.license &&
      !inputErrors.address &&
      !inputErrors.city &&
      !inputErrors.country &&
      !inputErrors.checkUpPrice &&
      !inputErrors.hour &&
      !inputErrors.specialities 
    ) {
      dispatch(postDoctor(input));
      setInput(initialInputs);
      onClick();
    } else {
      console.log("error");
    }
  };

  return (
    <section className={styles.Form}>
      {console.log(input)}
      <img
        src={iconClose}
        alt="alt-close-icon"
        className={styles.ButtonClose}
        onClick={onClick}
      />
      <b className={styles.Steps}>Paso ( {count} de 3 )</b>
      <h2 className={styles.TitleModal}>Agregar un Doctor</h2>
      <section className={styles.FirstContainer} id="FirstContainer">
        <div className={styles.InputContainer}>
          <span className={inputErrors.name ? styles.Errors : styles.NoErrors}>
            {inputErrors.name}
          </span>
          <label>
            <img src={iconInput} alt="icon-label-input" />
            Nombre:
          </label>
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
          <span className={inputErrors.email ? styles.Errors : styles.NoErrors}>
            {inputErrors.email}
          </span>
          <label>
            <img src={iconInput} alt="icon-label-input" />
            Email:
          </label>
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
          <label>
            <img src={iconInput} alt="icon-label-input" />
            Password:
          </label>
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
            className={
              inputErrors.phoneNumber ? styles.Errors : styles.NoErrors
            }
          >
            {inputErrors.phoneNumber}
          </span>
          <label>
            <img src={iconInput} alt="icon-label-input" />
            Teléfono:
          </label>
          <input
            className={styles.Input}
            type="text"
            name="phoneNumber"
            placeholder="Escribe tu teléfono..."
            value={input.phoneNumber}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className={styles.InputContainer}>
          <span
            className={
              inputErrors.license ? styles.Errors : styles.NoErrors
            }
          >
            {inputErrors.license}
          </span>
          <label>
            <img src={iconInput} alt="icon-label-input" />
            Licencia Médica:
          </label>
          <input
            className={styles.Input}
            type="text"
            name="license"
            placeholder="Escribe tu licencia médica..."
            value={input.license}
            onChange={(e) => handleChange(e)}
          />
        </div>
        
        <button className={styles.ButtonSubmit} onClick={()=> nextContainer()}>
          Continuar
        </button>

      </section>

      <section className={styles.SecondContainer} id="SecondContainer">

      <div className={styles.InputContainer}>
          <span
            className={
              inputErrors.city ? styles.Errors : styles.NoErrors
            }
          >
            {inputErrors.city}
          </span>
          <label>
            <img src={iconInput} alt="icon-label-input" />
            Ciudad:
          </label>
          <input
            className={styles.Input}
            type="text"
            name="city"
            placeholder="Escribe tu ciudad..."
            value={input.city}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className={styles.InputContainer}>
          <span
            className={
              inputErrors.country ? styles.Errors : styles.NoErrors
            }
          >
            {inputErrors.country}
          </span>
          <label>
            <img src={iconInput} alt="icon-label-input" />
            País:
          </label>
          <input
            className={styles.Input}
            type="text"
            name="country"
            placeholder="Escribe tu país..."
            value={input.country}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className={styles.InputContainer}>
          <span
            className={
              inputErrors.address ? styles.Errors : styles.NoErrors
            }
          >
            {inputErrors.address}
          </span>
          <label>
            <img src={iconInput} alt="icon-label-input" />
            Dirección de Citas:
          </label>
          <input
            className={styles.Input}
            type="text"
            name="address"
            placeholder="Escribe tu dirección..."
            value={input.address}
            onChange={(e) => handleChange(e)}
          />
        </div>
        
        <div className={styles.SelectContainer}>
          <span
            className={
              inputErrors.specialities ? styles.Errors : styles.NoErrors
            }
          >
            {inputErrors.specialities}
          </span>
          <select
            className={styles.SelectCreate}
            value={
              input.specialities.length === 0
                ? ""
                : input.specialities[input.specialities.length - 1]
            }
            name="specialities"
            onChange={(e) => {
              handleSelect(e);
            }}
          >
            <option value="" disabled defaultValue hidden>
              Especialidades:
            </option>
            {specialities &&
              specialities?.map((specialty, index) => (
                <option value={specialty} key={index}>
                  {specialty}
                </option>
              ))}
          </select>

          <div className={styles.OutputContainer}>
            {input.specialities.length > 0 &&
              input.specialities?.map((dishType, index) => (
                <div key={index} className={styles.ContainerList}>
                  <span className={styles.OutputLabel}>{dishType}</span>
                  {input.specialities.length > 0 && (
                    <button
                      name="specialities"
                      onClick={(e) => removeList(e, index)}
                    >
                      x
                    </button>
                  )}
                </div>
              ))}
          </div>
        </div>

        <button className={styles.ButtonSubmit} onClick={()=> nextContainer()}type="submit">
          Continuar
        </button>
      </section>

      <section className={styles.SecondContainer} id="ThirdContainer">

      <div className={styles.InputContainer}>
          <span className={inputErrors.image ? styles.Errors : styles.NoErrors}>
            {inputErrors.image}
          </span>
          <label>
            <img src={iconInput} alt="icon-label-input" />
            Foto:
          </label>
          <input
            className={styles.Input}
            type="text"
            name="image"
            placeholder="Url de tu foto..."
            value={input.image}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className={styles.InputContainer}>
          <span
            className={
              inputErrors.hour ? styles.Errors : styles.NoErrors
            }
          >
            {inputErrors.hour}
          </span>
          <label>
            <img src={iconInput} alt="icon-label-input" />
            Horario de Atención:
          </label>
          <input
            className={styles.Input}
            type="text"
            name="hour"
            placeholder="Ej: 8:00 - 17:00"
            value={input.hour}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className={styles.InputContainer}>
          <span
            className={
              inputErrors.checkUpPrice ? styles.Errors : styles.NoErrors
            }
          >
            {inputErrors.checkUpPrice}
          </span>
          <label>
            <img src={iconInput} alt="icon-label-input" />
            Costo de Consulta:
          </label>
          <input
            className={styles.Input}
            type="text"
            name="checkUpPrice"
            placeholder="Ej: 450.00"
            value={input.checkUpPrice}
            onChange={(e) => handleChange(e)}
          />
        </div>

      
        <button className={styles.ButtonSubmit} onClick={(e) => {handleSubmit(e);}} type="submit">
          Crear Doctor
        </button>
      </section>
      
      
    </section>
  );
};

export default CreateDoctor;
