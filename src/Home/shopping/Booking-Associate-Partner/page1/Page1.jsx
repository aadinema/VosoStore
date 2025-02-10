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
            Become a Booking.com Associate with VosoStore
            </h1>
          </div>
          <div className={styles.right}>
            <p className={styles.paragraph}>
            Explore Profitable Opportunities with VosoStore and Booking.com
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
            src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/hero-02-thumb-1536x759.png"
            alt="img"
            className={styles.image}
          />
        </div>

       
      </div>
    </>
  );
};

export default Page1;
