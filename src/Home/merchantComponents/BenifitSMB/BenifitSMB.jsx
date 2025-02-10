"use client";

import React from "react";
import Slider from "react-slick";
import styles from "@/Home/merchantComponents/BenifitSMB/CardSlider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaUsers,
  FaChartLine,
  FaHandshakeSimple,
  FaClock,
  FaTruck,
} from "react-icons/fa6";

const benifitSMB = [
  {
    title: "Expand Your Service Offerings",
    description:
      "Become a logistics partner in your region and attract new customers.",
    icon: <FaUsers />,
  },
  {
    title: "Boost Profitability",
    description:
      "Leverage discounted shipping rates to increase your profit margins.",
    icon: <FaChartLine />,
  },
  {
    title: "Save Time and Effort",
    description:
      "Manage all your courier and logistics needs through a single platform, freeing up time to focus on growing your business.",
    icon: <FaClock />,
  },
  {
    title: "Build Trust",
    description:
      "Offer reliable delivery solutions backed by the reputation of top courier companies.",
    icon: <FaHandshakeSimple />,
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
        {" "}
        <span className={styles.icon}>
          <FaTruck />
        </span>
        Benefits for SMBs
      </h2>
      <Slider {...settings}>
        {benifitSMB.map((service, index) => (
          <div key={index} className={styles.cardWrapper}>
            <div className={styles.card}>
              <span className={styles.icon}>
                <i>{service.icon}</i>
              </span>
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
