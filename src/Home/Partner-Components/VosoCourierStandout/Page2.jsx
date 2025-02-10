"use client";

import React from "react";
import Slider from "react-slick";
import styles from "@/Home/Partner-Components/VosoCourierStandout/page2.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaDollarSign, FaLaptop, FaChartLine, FaRocket } from "react-icons/fa6";

const benifitSMB = [
  {
    title: "• Unbeatable Pricing",
    description: "Lowest courier rates to maximize your margins.",
    icon: <FaDollarSign />,
  },
  {
    title: "• Proven Technology",
    description: "Trusted by businesses to manage logistics at scale.",
    icon: <FaLaptop />,
  },
  {
    title: "• Scalable Solution",
    description:
      "Designed to grow with your business and adapt to increasing demand.",
    icon: <FaChartLine />,
  },
  {
    title: "• Rapid Setup",
    description: "Launch your logistics aggregation platform in no time.",
    icon: <FaRocket />,
  },
];

const Page2 = () => {
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
      <h2 className={styles.heading}>Why Voso courier Stands Out</h2>
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

export default Page2;
