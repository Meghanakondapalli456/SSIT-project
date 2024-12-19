import React from "react";
import styles from "./Newsupdate.module.css"
const Newsupdatecard = ({ picture, title, mater, img, name, dec }) => {
  return (
    <div className={styles.newscard}>
      <div className={styles.card}>
        <img src={picture} />
      </div>
      <div className={styles.news}>
        <p className={styles.title}>{title}</p>
        <p  className={styles.mater}>{mater}</p>
        <div className={styles.bottom}>
          <div className={styles.pic}>
          <img src={img}  className={styles.img}/>
          </div>
          <div className={styles.info}>
          <p className={styles.name}>{name}</p>
          <p className={styles.dec}>{dec}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsupdatecard;
