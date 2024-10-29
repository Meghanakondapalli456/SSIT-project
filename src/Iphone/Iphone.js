import React from "react";
import styles from './Iphone.module.css'
import AboutUsCard from "./AboutUsCard";

const Iphone = () => {
    const data = [
        {
          imagePath: "/VR Array 1.png",
          title: "Cutting Edge Technology",
          aboutuscarddescription:"Take the advantage of our cutting-edge solutions to increase your Returnfrom investment on IT",
        },
    
        {
          imagePath: "/lines.png",
          title: "Crose Device Compatability ",
          aboutuscarddescription:"Multi-device compatibility ensures that creating, viewing and providing quick and easy",
        },
    
        {
          imagePath: "/clock .png",
          title: "Tailer Mode Development ",
          aboutuscarddescription:"Scalable and dynamic systems with the ever-changing trends to meet your dynamic business needs",
        },
      ];
  return (
    <div className={styles.container}>
     
      <div className={styles.header}>
        <div className={styles.logo}>LOGO</div>
        <img src="/3lines.png" alt="image"className={styles.img}  />
      </div><hr/>
      <div className={styles.card}>
        <img src="/Bulb.png" alt="bulb" className={styles.bulb} />
        <div className={styles.dec}>
          Advanced software, advanced research for <span className={styles.color}>SIMPLE </span>life
        </div>
        <button className={styles.btn}>Get a Quote &#8594;</button>
      </div>
      <div className={styles.num}>
        <div className={styles.dig}>1234</div>
        <div className={styles.lorem}>Lorem Ipsum is simply.</div>
        <div className={styles.dig}>1234</div>
        <div className={styles.lorem}>Lorem Ipsum is simply.</div>
      </div>
      <img src="/bell.png" alt="bell" className={styles.bell} />
      <div className={styles.heading}>
        About <span className={styles.color}>Lorem</span>
      </div>
      <div className={styles.aboutusdescription}>
        At AFQ Tech, we believe in a systematic approach for any project be it
        complex or simple. We are a group of individuals with a various set of
        skill set varies from Digital Marketing to IoT/Robotics solutions. We
        have our dedicated team for your project which uses various methods such
        as agile Scrum & agile Kanban. We ensure top-notch quality, on-time
        delivery, and agility for your project.
      </div>
      <div className={styles.aboutuscards}>
        {data.map((item, index) => {
          return <AboutUsCard key={`AboutUsCard-${index}`} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Iphone;
