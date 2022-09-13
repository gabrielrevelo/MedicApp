import React from 'react';
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

function Modal({children}) {

  return ReactDOM.createPortal(
    <>
      <section className={styles.MainContainer}>
        <article className={styles.ModalContainer}>
        {children}
        </article>
      </section>
      
    </>,
    document.getElementById("portal")
  )
}

export default Modal;