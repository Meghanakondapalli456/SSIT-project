import React from "react";
import Head from "../Header/Head";
import styles from "./Serv.module.css";
import Servcard from "./Servcard";


const Serv = () => {
  const smalldata = [
    {
      title: "1. Big Data & Business Analytics",
      picture: "/service img1.png",
      alt: "service1",
      describe:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id volutpat tristique vitae nibh. Etiam suscipit sed ultricies tortor a, aenean dignissim. Elementum augue mauris, curabitur donec pulvinar est enim. Vel a magna sagittis tempor, in dictumst maecenas leo. Venenatis, nunc, convallis est sit nisl est. Mattis vel purus dui nibh cras. Amet, vitae pellentesque sapien laoreet et sagittis montes, in mauris. Odio posuere arcu egestas habitant nisi, quisque aliquet adipiscing diam. Bibendum venenatis blandit congue vel eget id dolor interdum.",
    },
  ];
  const figure = [
    {
      image: "/fig1.png",
      altfig: "fig1",
      name: "lorem ipsum",
      des: "lorem ipsum",
      line: "______",
    },
    {
      image: "/fig2.png",
      altfig: "fig2",
      name: "lorem ipsum",
      des: "lorem ipsum",
      line: "______",
    },
    {
      image: "/fig3.png",
      altfig: "fig3",
      name: "lorem ipsum",
      des: "lorem ipsum",
      line: "______",
    },
  ];
  const design = [
    {
      pic: "/pic.png",
      altpic: "pic",
      para: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod vitae lorem mattis ut at at lobortis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod vitae lorem mattis ut at at lobortis..”",
      ipsum: "Lorem Ipsum",
      designer: "Designer",
      quote: "/Quote .png",
      altquote: "quote",
    },
  ];
  const dots = [
    {
      img1: "dot1.png",
      altimg1: "dot1",
      img2: "dot2.png",
      altimg2: "dot2",
      img3: "dot3.png",
      altimg3: "dot3",
    },
  ];
  const pretium = [{ ornare: "Pretium pellentesque ornare. Pretium" }];
  const reusedpretium = Array(4).fill({
    ornare: "Pretium pellentesque ornare. Pretium",
  });
  const sub = [
    {
      sym: "-",
    },
  ];
  const add = [
    {
      symbol: "+",
    },
  ];
  const reusedadd = Array(4).fill({ symbol: "+" });

  return (
    <div className={styles.container}>
      <Head />
      <h1>
        Our <span className={styles.coloring}>Services</span>
      </h1>
      <div className={styles.big}>
        {smalldata.map((item, index) => {
          return (
            <div key={index}>
              <p className={styles.title}>{item.title}</p>
              <img
                src={item.picture}
                alt={item.alt}
                className={styles.picture}
              />
              <p className={styles.describe}>{item.describe}</p>
            </div>
          );
        })}
      </div>
      <img src="/downarrow.png" alt="Down" className={styles.downarrow} />
      <h2>Our Team</h2>

      <div className={styles.display}>
        {figure.map((item, index) => {
          return <Servcard key={`Servcard-${index}`} {...item} />
        })}
      </div>
      <button className={styles.button}>Hire Us</button>
      <div className={styles.test}>
        <h2>Testimonials</h2>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id volutpat
          tristique vitae nibh. Etiam suscipit sed ultricies tortor a,{" "}
        </h3>
      </div>
      <div>
        {design.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.pic} alt={item.altpic} />
              <p>{item.para}</p>
              <p>{item.ipsum}</p>
              <p>{item.designer}</p>
              <img src={item.quote} alt={item.altquote} />
            </div>
          );
        })}
      </div>
      <div>
        {dots.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.img1} alt={item.altimg1} />
              <img src={item.img2} alt={item.altimg2} />
              <img src={item.img3} alt={item.altimg3} />
            </div>
          );
        })}
      </div>
      <div>
        <h3>FAQ</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id volutpat
          tristique vitae nibh. Etiam suscipit sed ultricies tortor a,{" "}
        </p>
      </div>
      <div>
        {pretium.map((item, index) => {
          return (
            <div key={index}>
              <p>{item.ornare}</p>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                volutpat tristique vitae nibh. Etiam suscipit sed ultricies
                tortor a, tristique vitae nibh. Etiam suscipit sed ultricies
                tortor a,{" "}
              </h4>
            </div>
          );
        })}
        {sub.map((item, index) => {
          return (
            <div key={index}>
              <p>{item.sym}</p>
            </div>
          );
        })}
      </div>
      <div>
        {reusedpretium.map((item, index) => {
          return (
            <div key={index}>
              <p>{item.ornare}</p>
            </div>
          );
        })}
        {reusedadd.map((item, index) => {
          return (
            <div key={index}>
              <p>{item.symbol}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Serv;
