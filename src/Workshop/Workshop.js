import React from "react";
import styles from "./Workshop.module.css";
import Whatulearncard from "../Whatulearn/Whatulearncard";

const Workshop = ({
  content = [],
  logos = [],
  repeatdata = [],
  
}) => {
  const imgdata =[
    {photo:"/image1.png",image:"image1"},
    {photo:"/image2.png",image:"image2"}
  ]
  const enrolldata=[
    {imgpath:"/image3.png",imgp:"image3"},
    {imgpath:"/image4.png",imgp:"image4"},
    {imgpath:"/image5.png",imgp:"image5"},
    {imgpath:"/image6.png",imgp:"image6"},
  ]
  return (
    <div className={styles.workshop}>
      <img src="/image.png" alt="bg-image" className={styles.backimage} />
      <div className="played">
        <img src="/video.png" alt="video" className={styles.video} />
        <div className={styles.gameing}>
        <div className={styles.game}>Gaming is the world of imagination where all the developers design their own world</div>
        <div className={styles.name}>by Edvard Brown</div>
        </div>
      </div>
      <div className={styles.companylogos}>
        {logos.map((logo, index) => (
          <img key={index} src={logo.img} alt={logo.name} />
        ))}
      </div>
      <div className={styles.maters}>
        {content.map((item, index) => (
          <div key={index}>
            <h2>{item.head}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <div className={styles.data}>
        {repeatdata.map((item, index) => (
          <Whatulearncard key={`whatulearn-${index} `} {...item} />
        ))}
      </div>
      <div className={styles.instructor}>
        <div className={styles.instructors}>Instructors</div>
        <div className={styles.inst}>
      {imgdata.map((img, index) => (
        <img key={index} src={img.photo} alt={img.image} />))}
        
        </div>
        <div className={styles.namespace}>
          <ul>Mave<span className={styles.color}>n</span> ric<span className={styles.color}>h</span></ul>
          <ul>Eric<span className={styles.color}>a</span> blis<span className={styles.color}>s</span></ul>
        </div>
        </div>
        <div className={styles.enroll}>
          <div className={styles.enrolled}>Enrolled</div>
          <div className={styles.images}>
        {enrolldata.map((item,index)=>(
          <img key={index} src={item.imgpath} alt={item.imgp}/>
        ))}
        </div>
        </div>
    </div>
  );
};

export default Workshop;
