import React, {useState} from "react";
import styles from "../../TopDoctors/TopDoctors.module.css";
import SearchBar from "../../Header/SearchBar";
import iconArrow from "../../../imagenes compartidas/icon-list.png";
import { useDispatch } from "react-redux";
import { sortDocsByRating, sortDocsByPrice } from "../../../../../Redux/actions/doctorActions";

const Filters = () => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const initialSelects = {
    rating: "",
    price: "",
  }
  const [filterSelects, setFilterSelects] = useState(initialSelects); 

  function handleChange(e){
    e.preventDefault();
    e.target.name === "rating" && dispatch(sortDocsByRating(e.target.value));
    e.target.name === "price" && dispatch(sortDocsByPrice(e.target.value));
    setFilterSelects({...initialSelects, [e.target.name] : e.target.value});
  }

  return (
    <>
      <SearchBar type={"NoHeader"} />
      <span className={styles.MoreFiltersText} onClick={() => setToggle(!toggle)} >
        Más Filtros <img src={iconArrow} alt="icon-arrow-down" />
      </span>
      {toggle &&
      <section className={styles.SelectContainer}>
        <select
          className={styles.Select}
          value={filterSelects.rating}
          onChange={handleChange}
          name="rating"
        >
          <option value="" disabled defaultValue hidden>
            Puntuación:
          </option>
          <option value="highest">Mayor puntaje</option>
          <option value="lowest">Menor puntaje</option>
        </select>
        <select
          className={styles.Select}
          value={filterSelects.price}
          onChange={handleChange}
          name="price"
        >
          <option value="" disabled defaultValue hidden>
            Precio:
          </option>
          <option value="highest">Mayor Precio</option>
          <option value="lowest">Menor Precio</option>
        </select>
      </section>
      }
    </>
  );
};

export default Filters;
