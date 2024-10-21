import React from 'react'
import styles from'./News.module.css';


const Newscard = ({img,date,title,description,more}) => {
  return (
    <div className={styles.news}>
        <img src= {img} alt='image' className={styles.image} />
        <div className={styles.date}>{date}</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.more}>{more}</div>
    </div>
  )
}

export default Newscard