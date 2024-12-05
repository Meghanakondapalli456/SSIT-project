import React from "react";
import styles from './Serv.module.css'

const Servcard = ({ image, name, des, line }) => {
  return (
    <div className={styles.servcard}> 
      <img src={image}  />
      <p className={styles.name}>{name}</p>
      <p className={styles.des}>{des}</p>
      <p className={styles.line}>{line}</p>
    </div>
  );
};

export default Servcard;
