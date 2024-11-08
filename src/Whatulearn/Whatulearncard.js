import React from 'react'
import styles from'./Whatulearn.module.css'

const Whatulearncard = ({img,title,description,color}) => {
  return (
    <div className={styles.website} >
      <div className={styles.colors} style={{background:color}} >
        <img src={img} alt='done'className={styles.done} />
        </div>
        <div className={styles.order}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
        
        </div>
        
    </div>
  )
}

export default Whatulearncard