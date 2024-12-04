import React from 'react'
import Head from "../Header/Head";
import styles from "./Serv.module.css"
const Serv = () => {
  const smalldata=[
    {
      
      title: "1. Big Data & Business Analytics",
      picture: "/service img1.png",
      alt: "service1",
      describe:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id volutpat tristique vitae nibh. Etiam suscipit sed ultricies tortor a, aenean dignissim. Elementum augue mauris, curabitur donec pulvinar est enim. Vel a magna sagittis tempor, in dictumst maecenas leo. Venenatis, nunc, convallis est sit nisl est. Mattis vel purus dui nibh cras. Amet, vitae pellentesque sapien laoreet et sagittis montes, in mauris. Odio posuere arcu egestas habitant nisi, quisque aliquet adipiscing diam. Bibendum venenatis blandit congue vel eget id dolor interdum.",
    },
  ]
  const figure =[
    {
      image:"/fig1.png", alt:"fig1",
      name:"lorem ipsum",
      des:"lorem ipsum",
      line:"______"
    },
    {
      image:"/fig2.png", alt:"fig2",
      name:"lorem ipsum",
      des:"lorem ipsum",
      line:"______"
    },
    {
      image:"/fig3.png", alt:"fig3",
      name:"lorem ipsum",
      des:"lorem ipsum",
      line:"______"
    }
  ]
  const design=[
    {
      pic:"/pic.png", alt:"pic",
      para:"“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod vitae lorem mattis ut at at lobortis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod vitae lorem mattis ut at at lobortis..”",
      ipsum:"Lorem Ipsum",
      designer:"Designer",
      quote:"/Quote .png", alt:"quote",
    }
  ]
  const dots=[
    {
      img1:"dot1.png", alt:"dot1",
      img2:"dot2.png",  alt:"dot2",
      img3:"dot3.png",   alt:"dot3",
    }
  ]
  return (
    <div>
      <Head />
      <h1>Our <span className={styles.coloring}>Services</span></h1>
      <div>
        {smalldata.map((item,index)=>{
          return (<div key={index}>
            <p>{item.title}</p>
            <img src={item.picture} alt={item.alt}/>
            <p>{item.describe}</p>
            </div>
       ) })}
      </div>
      <img src='/downarrow.png'  alt='Down' className={styles.downarrow} />
      <h2>Our Team</h2>

      <div>
        {figure.map((item,index)=>{
           return (
             <div key={index}>
              <img src={item.image} alt={item.alt} />
              <p>{item.name}</p>
              <p>{item.des}</p>
              <p>{item.line}</p>
              </div>
           )})}
      </div>
      <button className={styles.button}>Hire Us</button>
      <div> 
        <h2>Testimonials</h2>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id volutpat tristique vitae nibh. Etiam suscipit sed ultricies tortor a, </h3>
      </div>
      <div>
        {design.map((item,index)=>{
          return(
            <div key={index}>
              <img src={item.pic} alt={item.alt} />
              <p>{item.para}</p>
              <p>{item.ipsum}</p>
              <p>{item.designer}</p>
              <img src={item.quote} alt={item.alt} />
            </div>
          )
        })}
      </div>
      <div>
        {dots.map((item,index)=>{
          return(
            <div key={index}>
              <img src={item.img1} alt={item.alt}/>
              <img src={item.img2} alt={item.alt}/>
              <img src={item.img3} alt={item.alt}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Serv