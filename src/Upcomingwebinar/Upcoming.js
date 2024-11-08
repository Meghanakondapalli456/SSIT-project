import React from 'react'
import styles from './Upcomingwebinar.module.css'


const Upcoming = ({pic,name,ceo,guide,info,dte,tim,}) => {
  return (
    <div className={styles.card}>
        <div className={styles.image}>
            <img src={pic} alt='image'className={styles.img}/>
        </div>
        <div className={styles.data}>
          <div className={styles.script}>
            <div className={styles.name}>{name}</div>
            <div className={styles.ceo}>{ceo}</div>
            <div className={styles.guide}>{guide}</div>
            <div className={styles.info}>{info}</div>
            <div className={styles.dte}>{dte}</div>
            <div className={styles.tim}>{tim}</div>
            </div>
            <div className={styles.click}>
            <button className={styles.reg}>Register</button>
            </div>
        </div>
        </div>
         
  )
}

export default Upcoming