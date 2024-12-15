import React from "react";
import styles from "./Newsupdate.module.css";
import Head from "../Header/Head";
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
                <img src={item.image} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Newsupdate;
