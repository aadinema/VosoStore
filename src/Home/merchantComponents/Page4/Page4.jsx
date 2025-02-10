import React from "react";
import styles from "./page4.module.css";
import { FaStore , FaShoppingCart ,FaTruck ,FaNetworkWired ,FaLightbulb  } from "react-icons/fa";

const Page4 = () => {
  const data = [
    {
      img: <FaStore />,
      head: "Small and medium retailers",
      para: "Each demo built with Teba will look different. Customize almost anything in the appearance of your website.",
    },
    {
      img:<FaShoppingCart />,
      head: "E-commerce businesses",
      para: "Explore innovative and cutting-edge technology solutions tailored for your business needs.",
    },
    {
      img: <FaTruck />,
      head: "Local delivery service providers",
      para: "Get reliable support and services to ensure the seamless functioning of your IT systems.",
    },
    {
      img: <FaNetworkWired />,
      head: "Logistic service aggregators",
      para: "Get reliable support and services to ensure the seamless functioning of your IT systems.",
    },
    {
      img: <FaLightbulb />,
      head: "Entrepreneurs entering the logistics market",
      para: "Get reliable support and services to ensure the seamless functioning of your IT systems.",
    },
  ];

  return (
    <>
      <div className={styles.mainContainer}>
      <h1 className={styles.heading}>Who Can Use Voso Courier?</h1>
      </div>
      <div className={styles.container}>
      
        <div className={styles.left}>
          
          <div className={styles.subContainer}>
            {data.map((item, index) => (
              <div key={index} className={styles.subCtItem}>
                <div className={styles.iconContainer}>
                  <span><i>{item.img}</i></span>
                </div>
                <div>
                  <h1 className={styles.subHeading}>{item.head}</h1>
                  {/* <p className={styles.paragraph}>{item.para}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.primaryImage}>
            <img
              src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/shape3.svg"
              alt="img1"
              className={styles.image1}
            />
            <img
              src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/thumb3-1.png"
              alt="img2"
              className={styles.image2}
            />
          </div>
          <div className={styles.secondaryImage}>
            <img
              src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/shape4.svg"
              alt="img3"
              className={styles.image3}
            />
            <img
              src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/thumb4-1.png"
              alt="img4"
              className={styles.image4}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page4;
