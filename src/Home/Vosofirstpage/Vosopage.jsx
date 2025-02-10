"use client"
import React from "react";
import Slider from "react-slick";
import styles from "./Vosopage.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://vosostore.com/img/c4.png",
  "https://vosostore.com/img/c1.png",
  "https://vosostore.com/img/c3.png",
];

const Vosopage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className={styles.slide}>
            <img src={src} alt={`Slide ${index + 1}`} className={styles.image} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Vosopage;
