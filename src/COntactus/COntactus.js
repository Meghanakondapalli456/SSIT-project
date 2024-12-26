import React from 'react'
import Head from '../Header/Head'
import styles from './COntactus.module.css'

const COntactus = () => {
  return (
    <div>
        <Head />
        <div className={styles.wrapper}>
        <div className={styles.details}>
        <p className={styles.heading}>Contact <span className={styles.color}>Us</span></p>
        <p className={styles.name}>Your Name</p>
        <div className={styles.box}>Write your name</div>
        <p className={styles.mail}>Your Email</p>
        <div className={styles.gmail}>Sample@gmail.com</div>
        <p className={styles.message}>Message</p>
        <div className={styles.here}>Write here...........</div>
        <button className={styles.send}>Send &rarr;</button>
        </div>
        <div className={styles.details}>
            <img src="/meeting image.png" />
            <img src='/blur image.png' className={styles.blur}/>
            <div className={styles.info}>
                <div className={styles.redball}>
                <img src='/redball.png'/>
                </div>
                <div className={styles.address}>
                  <p className={styles.adrs}>Address</p>
                  <p className={styles.place}>No 7, Katherine Place, Melbourne 3000,
                  VIC Australia</p>
                </div>
            </div>
        </div>
        </div>
    </div> 
  )
}

export default COntactus