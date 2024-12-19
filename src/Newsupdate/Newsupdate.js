import React from "react";
import styles from "./Newsupdate.module.css";
import Head from "../Header/Head";
import Newsupdatecard from "./Newsupdatecard";
import Keyword from "../Keyword/Keyword";

const Newsupdate = () => {
  const icons = [
    {
      image: "/brandicon1.png",
    },
    {
      image: "/brandicon2.png",
    },
    {
      image: "/brandicon3.png",
    },
    {
      image: "/brandicon4.png",
    },
  ];

  const  box =[
    {
      picture:"/scope.png",
      title:"Lorem Ipsum is simply dummy text of the .",
      mater:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor nulla pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor nulla pellentesque.",
      img:"/smallimg.png",
      name:"Lorem Ipsum ",
      dec:"Lorem ipsum dolor sit amet, consect",

    },

    {
      picture:"/typing.png",
      title:"Lorem Ipsum is simply dummy text of the .",
      mater:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor nulla pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor nulla pellentesque.",
      img:"/smallimg1.png",
      name:"Lorem Ipsum ",
      dec:"Lorem ipsum dolor sit amet, consect",

    },

    {
      picture:"/teach.png",
      title:"Lorem Ipsum is simply dummy text of the .",
      mater:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor nulla pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor nulla pellentesque.",
      img:"/smallimg2.png",
      name:"Lorem Ipsum ",
      dec:"Lorem ipsum dolor sit amet, consect",

    },
  ]
  return (
    <div>
      <Head />
      <img src="/space.png" className={styles.space} />
      <p>Lorem Ipsum is simply dummy text of the printing.</p>
      <div className={styles.paraimages}>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac tellus
          quis faucibus odio suspendisse facilisis enim. Nibh eget fermentum,
          et, pellentesque ultricies interdum dictumst viverra. Pulvinar urna
          neque a aenean. Fringilla diam pellentesque laoreet dis eu sit.
          Dignissim malesuada phasellus sed at n this is the most significant ui
          in the figma i have ever createdolutpat scelerisque donec. Non, sit
          mattis suspendisse massa viverra nulla nascetur. Velit, sollicitudin
          felis lobortis this is the most t est dignissim vel egestas. Eu purus
          tristique vehicula sed etiam. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Hac tellus quis faucibus odio suspendisse facilisis
          enim. Nibh eget fermentum, et, pellentesque ultricies interdum
          dictumst viverra. Pulvinar urna neque a aenean. Fringilla diam
          pellentesque laoreet dis eu sit. Dignissim malesuada phasellus sed at
          non fusce ultrices imperdiet non. Iaculis quis gravida vitae sed
          volutpat scelerisque donec. Non, sit mattis suspendisse massa viverra
          nulla nascetur. Velit, sollicitudin felis lobortis scelerisque est
          dignissim vel egestas. Eu purus tristique vehicula sed etiam.
        </p>
        <div className={styles.images}>
          {icons.map((item, index) => {
            return (
              <div key={index}>
                <img src={item.image} className={styles.image} />
              </div>
            );
          })}
        </div>
      </div>
      <p className={styles.para}>eget fermentum, et, pellentesque ultricies interdum dictumst viverra. Pulvinar urna neque a aenean. Fringilla diam pellentesque laoreet dis eu sit. Dignissim malesuada phasellus sed at non fusce ultrices xcd imperdiet non. Iaculis quis gravida vitae sed volutpat scelerisque  ddscdonec. Non, sit mattis suspendisse massa viverra nulla nascetur.</p>
      <div>
        {box.map((item, index) =>{
          return <Newsupdatecard  key={`Newsupdatecard-${index}`}{...item}/>
        })}
      </div>
      < Keyword />
    </div>
  );
};

export default Newsupdate;
