"use client"
import React from "react";
import styles from "./page1.module.css";
// import Slider from "react-slick";

const Page1 = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 500,
    cssEase: "linear",
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.left}>
            <h1 className={styles.heading}>
            Unified Logistics Interface Platform (ULIP) - for ease of doing business
            </h1>
          </div>
          <div className={styles.right}>
            <p className={styles.paragraph}>
            We offer cost-effective and most reliable courier and cargo services to India
            </p>
            <div>
              <button className={styles.primaryButton}>
                <a href="#">Let's Grow Your Business →</a>
              </button>
              {/* <button className={styles.secondaryButton}>View Services</button> */}
            </div>
          </div>
        </div>

        {/* image section */}
        <div className={styles.imageContainer}>
          <img
            src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/service1.png"
            alt="img"
            className={styles.image}
          />
        </div>

       
      </div>
    </>
  );
};

export default Page1;
