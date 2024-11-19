import React from "react";
import styles from "./Workshop.module.css";
import Whatulearncard from "../Whatulearn/Whatulearncard";

const Workshop = ({ logos = [], repeatdata = [] }) => {
  const newContent = [
    {
      head: "Build something new in our Workshop",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id volutpat tristique vitae nibh. Etiam suscipit sed ultricies tortor a,  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id volutpat tristique vitae nibh. Etiam suscipit sed ultricies tortor a, .... ",
    },
  ];
  const imgdata = [
    { photo: "/image1.png", image: "image1" },
    { photo: "/image2.png", image: "image2" },
  ];
  const enrolldata = [
    { imgpath: "/image3.png", imgp: "image3" },
    { imgpath: "/image4.png", imgp: "image4" },
    { imgpath: "/image5.png", imgp: "image5" },
    { imgpath: "/image6.png", imgp: "image6" },
  ];
  const enrolldata2 = [
    { path: "/path1.png", p: "path1" },
    { path: "/path2.png", p: "path2" },
    { path: "/path3.png", p: "path3" },
    { path: "/path4.png", p: "path4" },
    { path: "/path5.png", p: "path5" },
    { path: "/path6.png", p: "path6" },
    { path: "/path7.png", p: "path7" },
    { path: "/path8.png", p: "path8" },
  ];
  const more = [
    { images: "/images1.png", images1: "images1" },
    { images: "/images2.png", images1: "images2" },
  ];
  const para = [
    {
      paragraph:
        "Not Humans its all about technology that what leads in the future..",
      pg: "by Edvard Brown",
      play:"/play-fill.png",pl:"play",
      arrow:"/right-circle-fill.png",arr:"arrow",
    },
    {
      paragraph:
        "Gaming is the world of imagination where all the developers design their own world",
      pg: "by Edvard Brown",
      play:"/play-fill.png",pl:"play",
      arrow:"/right-circle-fill.png",arr:"arrow",
    },
  ];
  return (
    <div className={styles.workshop}>
      <img src="/image.png" alt="bg-image" className={styles.backimage} />
      <div className="played">
        <img src="/video.png" alt="video" className={styles.video} />
        <div className={styles.gameing}>
          <div className={styles.game}>
            Gaming is the world of imagination where all the developers design
            their own world
          </div>
          <div className={styles.name}>by Edvard Brown</div>
        </div>
      </div>
      <div className={styles.companylogos}>
        {logos.map((logo, index) => (
          <img key={index} src={logo.img} alt={logo.name} />
        ))}
      </div>
      <div className={styles.mater}>
        {newContent.map((content, index) => (
          <div key={index}>
            <h2>{content.head}</h2>
            <h3>{content.description}</h3>
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
            <img key={index} src={img.photo} alt={img.image} />
          ))}
        </div>
        <div className={styles.namespace}>
          <ul>
            Mave<span className={styles.color}>n</span> ric
            <span className={styles.color}>h</span>
          </ul>
          <ul>
            Eric<span className={styles.color}>a</span> blis
            <span className={styles.color}>s</span>
          </ul>
        </div>
      </div>
      <div className={styles.enroll}>
        <div className={styles.enrolled}>Enrolled</div>
        <div className={styles.images}>
          {enrolldata.map((item, index) => (
            <img key={index} src={item.imgpath} alt={item.imgp} />
          ))}
        </div>
      </div>
      <button className={styles.btn}>Enroll</button>
      <div className={styles.grids}>
        <img src="/ quote.png" alt="quote" className={styles.quote} />
        <div className={styles.grid}>
          {enrolldata2.map((item, index) => (
            <img key={index} src={item.path} alt={item.p} />
          ))}
        </div>
        <p>
          At AFQ Tech, we believe in a systematic approach for any project be it
          complex or simple. We are a group of individuals with a various set of
          skill set varies from Digital Marketing to IoT/Robotics solutions. We
          have our dedicated team for your project which uses various methods
          such as agile Scrum & agile Kanban. We e
        </p>
        <h5>Martha , United States</h5>
      </div>
      <div className={styles.moreworks}>
        <div className={styles.work}>More Workshops</div>

        <div className={styles.works}>
          {more.map((pic, index) => (
            <img key={index} src={pic.images} alt={pic.images1} />
          ))}
        </div>
      </div>
      <div>
        {para.map((p,index)=>(
          <img key={index} src={p.play} alt={p.pl} />
        ))}
      </div>
    </div>
  );
};

export default Workshop;
