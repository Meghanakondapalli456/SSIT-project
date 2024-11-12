import React from "react";
import styles from "./Uxdesign.module.css";
import Workshop from "../Workshop/Workshop";

const Uxdesign = () => {
  const time = [
    { zero: "00", period: "DAYS" },
    { zero: "00", period: "HOURS" },
    { zero: "00", period: "MINUTES" },
    { zero: "00", period: "SECONDS" },
  ];
  return (
    <div className={styles.Uxdesign}>
      <img src="/bgimage.png" alt="bg-image" className={styles.bgimage} />
      <div className={styles.play}>
        <img src="/video.png" alt="video" className={styles.video} />
        <div className={styles.free}>Free webinar to become a UX designer</div>
        <div className={styles.mr}>Mr.John Smith</div>
        <div className={styles.ist}>
          This Webinar begins: Thursday,14th March ,4PM IST
        </div>
        <button className={styles.click}>Save My Spot</button>
        <div className={styles.period}>
          {time.map((item, index) => (
            <div key={index} className={styles.timeBlock}>
              <div className={styles.zero}>{item.zero}</div>
              <div className={styles.periodLabel}>{item.period}</div>
            </div>
          ))}
        </div>
      </div>
   
    </div>
  );
};

export default Uxdesign;
