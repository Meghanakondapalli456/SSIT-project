import React from "react";
import styles from './Latestnews.module.css'

const Latestnewscard = ({ img, txt, indus, pic, here, date }) => {
  return (
    <div className={styles.Latestnewscard}>
      <img src={img} className={styles.img} />
      <p className={styles.txt}>{txt}</p>
      <p className={styles.indus}>{indus}</p>
      <div className={styles.picdata}>
        <div className={styles.pic}>
      <img src={pic} />
      </div>
      <div className={styles.datahere}>
      <p className={styles.here}>{here}</p>
      <p className={styles.date}>{date}</p>
      </div>
    </div>
    </div>
  );
};

export default Latestnewscard;
