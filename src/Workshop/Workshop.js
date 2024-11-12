import React from "react";
import styles from "./Workshop.module.css";
import Whatulearncard from "../Whatulearn/Whatulearncard";

const Workshop = ({
  content = [],
  logos = [],
  repeatdata = [],
  Uxdesign = [],
}) => {
  return (
    <div className={styles.workshop}>
      <img src="/image.png" alt="bg-image" className={styles.backimage} />
      <div className="played">
        <img src="/video.png" alt="video" className={styles.video} />
        <div className={styles.gameing}>
        <div className={styles.game}>Gaming is the world of imagination where all the developers design their own world</div>
        <div className={styles.name}>by Edvard Brown</div>
        </div>
      </div>
      <div className={styles.companylogos}>
        {logos.map((logo, index) => (
          <img key={index} src={logo.img} alt={logo.name} />
        ))}
      </div>
      <div className={styles.maters}>
        {content.map((item, index) => (
          <div key={index}>
            <h2>{item.head}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <div className={styles.data}>
        {repeatdata.map((item, index) => (
          <Whatulearncard key={`whatulearn-${index} `} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Workshop;
