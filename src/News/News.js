import React from 'react'
import Newscard from './Newscard'
import styles from './News.module.css'

const News = () => {
  const array =[
    {img:"/holoplot.png",
      date:"12/12/2020",
      title:"Holoplot",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an ",
      more:"Read more "
    },

    {img:"/nawaloka.png",
      date:"12/12/2020",
      title:"Nawaloka Hospitals Mobile App",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an ",
      more:"Read more"
    },

    {img:"/ambuluwawa.png",
      date:"12/12/2020",
      title:"Smart Solution For Ambuluwawa Biodiversity Complex",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an ",
      more:"Read more"
    },
    {img:"/hospitals.png",
      date:"12/12/2020",
      title:"Nawaloka Hospitals Mobile App",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an ",
      more:"Read more "
    }
  ]
  return (
    <div className={styles.newswrapper}>
    <div className={styles.heading}>Our Latest News</div>
    <div className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</div>
    <div className={styles.view}><u>View All</u></div>
    <div className={styles.paper}>
      {array.map((item,index)=>{
        return <Newscard key={`Newscard-${index}`}{...item} />
      })}
    </div>
</div>
  )
}

export default News