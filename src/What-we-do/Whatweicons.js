import React from "react";
import styles from "./Whatwe.module.css";

const Whatweicons = ({ image, title, description, bgcolor }) => {
  return (
    <div className={styles.icon}>
      <div className={styles.bgcolors} style={{ background: bgcolor }}>
        <img src={image} alt="web.png" className={styles.web} />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default Whatweicons;
