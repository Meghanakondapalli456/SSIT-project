import React from "react";
import styles from "./AboutUs.module.css";
import AboutUsCard from "./AboutUsCard";

export const AboutUs = () => {
  const data = [
    {
      imagePath: "/VR Array 1.png",
      title: "Cutting Edge Technology",
      aboutuscarddescription:
        "Take the advantage of our cutting-edge solutions to increase your Returnfrom investment on IT",
    },

    {
      imagePath: "/VR Array 1.png",
      title: "Crose Device Compatability ",
      aboutuscarddescription:
        "Multi-device compatibility ensures that creating, viewing and providing quick and easy",
    },

    {
      imagePath: "/VR Array 1.png",
      title: "Tailer Mode Development ",
      aboutuscarddescription:
        "Scalable and dynamic systems with the ever-changing trends to meet your dynamic business needs",
    },
  ];
  return (
    <div className={styles.aboutusWrapper}>
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
