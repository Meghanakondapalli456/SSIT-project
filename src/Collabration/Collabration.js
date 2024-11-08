import React from 'react'
import styles from './Collabration.module.css'
import Collabrationcard from './Collabrationcard'

const Collabration = () => {
    const collab=[
        {img:"/img1.png"},
        {img:"/img2.png"},
        {img:"/img3.png"},
        {img:"/img4.png"},
        {img:"/img5.png"},
        {img:"/img6.png"},
        {img:"/img7.png"}
    ]
  return (
    <div>
       {collab.map((item, index) =>{
        return <Collabrationcard key={`collabrationcard-${index}`}{...item} />
       })}
       <div className={styles.para}> At AFQ Tech, we believe in a systematic approach for any project be it complex or simple. We are a group of individuals with a various set of skill set varies from Digital Marketing to IoT/Robotics solutions. We have our dedicated team for your project which uses various methods such as agile Scrum & agile Kanban. We e</div>
       <div className={styles.dark}> Martha ,  United States</div>
    </div>
  )
}

export default Collabration