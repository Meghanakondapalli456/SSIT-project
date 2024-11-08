import React from 'react'
import styles from './Collabration.module.css'


const Collabrationcard = ({img}) => {
  return (
    <div className={styles.more} >
       <img src={img} alt='image' className={styles.images}/>
    </div>
  )
}

export default Collabrationcard