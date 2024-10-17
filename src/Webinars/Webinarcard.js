import React from 'react'
import styles from "./Webinar.module.css";


const Webinarcard = ({image,name,ceo,design,description,date,time,registration}) => {
  return (
    <div className={styles.Webinarcard}>
       <img src={image} alt='image' className={styles.image} />
        <div className={styles.author}>{name}</div>
        <div className={styles.ceo}>{ceo}</div>
        <div className={styles.designer}>{design}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.date}>{date}</div>
        <div className={styles.time}>{time}</div>
        <button className={styles.register}>{registration}</button>
    </div>
  )
}

export default Webinarcard