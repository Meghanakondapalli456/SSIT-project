import React from "react";
import styles from "./Iphone.module.css";

const AboutUsCard = ({
  imagePath ,title,aboutuscarddescription
}) => {
  return (
    <div className={styles.AboutUsCard}>
      <img src={ imagePath} alt="VR array" className={styles.image} />
      <div className={styles.title}>{title}</div>
      <div className={styles.aboutuscarddescription}>
        {aboutuscarddescription}
      </div>
    </div>
   
    
  );
};

export default AboutUsCard;
