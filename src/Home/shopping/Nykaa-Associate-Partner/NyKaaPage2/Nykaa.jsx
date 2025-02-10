"use client";
import React from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./nykaa.module.css";

// Dynamically import Slider
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const Nykaa = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.container}>
      
      
      <div className={styles.amazonContainer}>
        <img src="https://vosostore.com/img/nykaalogo.png" alt="Ajio Logo" />
        <h2>Join the Leading Beauty and Wellness Network</h2>
        <p>
        Are you looking for a lucrative business opportunity in the beauty and wellness sector? VosoStore offers you the chance to become a Nykaa Associate, allowing you to earn additional income by promoting a wide range of beauty and wellness products from one of India's leading online retailers. With VosoStore’s expertise and Nykaa’s extensive product catalog, you can achieve significant success.
        </p>
        <button className={styles.joinButton}>
          <a href="#">Join Now</a>
        </button>
      </div>
      <h2>Why Partner with Us?</h2>
      <Slider {...settings} className={styles.carousel}>
        {[
          { title: "Maximize Your Earnings", text: "Earn competitive commissions by promoting a diverse range of products from Amazon's vast marketplace." },
          { title: "Extensive Product Range", text: "Choose from a wide array of fashion products to cater to various customer tastes and preferences." },
          { title: "Get Expert Support", text: "Benefit from VosoStore’s expertise and support to enhance your marketing efforts." }
        ].map((item, index) => (
          <div key={index} className={styles.slideWrapper}>
            <div className={styles.card}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Nykaa;
