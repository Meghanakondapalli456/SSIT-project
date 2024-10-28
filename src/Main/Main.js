import React from 'react'
import styles from './Main.module.css'

const Main = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.card}>
      <div className={styles.author}>
        <img  src='/author.png' alt='author' className={styles.image}/>
        <img src='/star.png' alt='author' className={styles.star} /><div className={styles.rate}> 5.0</div>
        <div className={styles.dummy}>Lorem Ipsum is simply dummy</div>
        <div className={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
      </div>
      <div className={styles.name}>John rikey</div>
      </div>
    </div>
  )
}

export default Main