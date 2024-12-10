import React from 'react'
import styles from './Profile.module.css'

const Profilecard = ({picture,course,language,author}) => {
  return (
    <div className={styles.profilecard}>
     <img src={picture} alt='alt' />
     <div className={styles.verticalline}></div>
     <div className={styles.information}>
     <p className={styles.course}>{course}</p>
     <p className={styles.language}>{language}</p>
     <p className={styles.author}>{author}</p>
     </div>
    </div>
  )
}

export default Profilecard