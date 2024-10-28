import React from "react";
import styles from "./Webinar.module.css";
import Webinarcard from "./Webinarcard";

const Webinar = () => {
  const info=[{
    image:"/draw.png",
    name:"Mr.john smith",
    ceo:"CEO at X-design",
    design:"How to become a UX Designer",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod vitae lorem mattis ut at at lobortis Lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod vitae lorem mattis ut at at lobortis Lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date:"20th Nov",
    time:"10.00 AM IST",
    registration:"Register"}]
  return (
    <div className={styles.webinarwrapper}>
      <div className={styles.heading}>Webinars</div>
      {info.map((value,index)=>{
        return <Webinarcard key={`Webinarcard-${index}`}{...value} />
      })}
      
    </div>
  );
};

export default Webinar;
