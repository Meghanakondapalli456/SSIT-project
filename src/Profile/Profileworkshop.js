import React from "react";
import styles from "./Profile.module.css";
const Profileworkshop = ({ picto, imagination, authors, playfill, circle }) => {
  return (
    <div className={styles.working}>
      <img src={picto} className={styles.picto} />
      <div className={styles.verticallines}></div>
      <p className={styles.imagination}>{imagination}</p>
      <p className={styles.authors}>{authors}</p>
      <div className={styles.playfillcircle}>
      <img src={playfill} className={styles.playfill} />
      <img src={circle} className={styles.circle} />
    </div>
    </div>
  );
};

export default Profileworkshop;
