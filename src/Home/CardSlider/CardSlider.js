"use client";
import React from "react";
import Slider from "react-slick";
import styles from "./CardSlider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaShieldAlt,
  FaChartLine,
  FaCogs,
  FaPalette,
  FaMobileAlt,
  FaBullhorn,
} from "react-icons/fa";

const services = [
  {
    title: "Cyber Security Solutions",
    description:
      "With the VOSO Store’s mATM system, offer your customers services like cash deposit, cash withdrawal, balance inquiry, mini statements, and PoS (point of sales) services to grow your business exponentially and earn the highest commission in the industry.",
    icon: <FaShieldAlt />,
  },
  {
    title: "Data Tracking Security",
    description:
      "With official LIC integration, pay the LIC insurance premium for your customers and earn the highest commission in the industry on each successful LIC bill payment transaction.",
    icon: <FaChartLine />,
  },
  {
    title: "IT Management Service",
    description:
      "With official LIC integration, pay the LIC insurance premium for your customers and earn the highest commission in the industry on each successful LIC bill payment transaction.",
    icon: <FaCogs />,
  },
  {
    title: "UI/UX & Branding Identity",
    description:
      "With official LIC integration, pay the LIC insurance premium for your customers and earn the highest commission in the industry on each successful LIC bill payment transaction.",
    icon: <FaPalette />,
  },
  {
    title: "Web & Mobile App Development",
    description:
      "With official LIC integration, pay the LIC insurance premium for your customers and earn the highest commission in the industry on each successful LIC bill payment transaction.",
    icon: <FaMobileAlt />,
  },
  {
    title: "Digital Marketing Services",
    description:
      "With official LIC integration, pay the LIC insurance premium for your customers and earn the highest commission in the industry on each successful LIC bill payment transaction.",
    icon: <FaBullhorn />,
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
      <h2 className={styles.heading}>Solution for your Business</h2>
      <Slider {...settings}>
        {services.map((service, index) => (
          <div key={index} className="cardWrapper">
            <div className={styles.card}>
              <div className={styles.icon}>{service.icon}</div>
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