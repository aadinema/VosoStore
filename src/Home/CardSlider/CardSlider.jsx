"use client"
import React from "react";
import Slider from "react-slick";
import styles from "./CardSlider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    title: "Cyber Security Solutions",
    description: "Developing a comprehensive IT strategy that aligns.",
    icon: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon6.svg",
  },
  {
    title: "Data Tracking Security",
    description: "Developing a comprehensive IT strategy that aligns.",
    icon: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon6.svg",
  },
  {
    title: "IT Management Service",
    description: "Developing a comprehensive IT strategy that aligns.",
    icon: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon6.svg",
  },
  {
    title: "UI/UX & Branding Identity",
    description: "Developing a comprehensive IT strategy that aligns.",
    icon: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon6.svg",
  },
  {
    title: "Web & Mobile App Development",
    description: "Developing a comprehensive IT strategy that aligns.",
    icon: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon6.svg",
  },
  {
    title: "Digital Marketing Services",
    description: "Developing a comprehensive IT strategy that aligns.",
    icon: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon7.svg",
  },
];

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.heading}>
        Our awesome services to <br/> give you success
      </h2>
      <Slider {...settings}>
        {services.map((service, index) => (
          <div key={index} className="cardWrapper">
            <div className={styles.card}>
              <img src={service.icon} alt="img" className={styles.icon} />
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
              <a href="#" className={styles.learnMore}>
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
