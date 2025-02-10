"use client";

import { useRef } from "react";
import styles from "./customer.module.css";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaChartBar , FaTrophy , FaBroadcastTower   } from "react-icons/fa";
import { FaHandHoldingDollar ,FaRegFaceSmileBeam  } from "react-icons/fa6";


const CustomerServices = () => {
  const scrollContainerRef = useRef(null);

  const cards = [
    {
      icon: <FaChartBar />,
      title: "Largest Market Reach",
      description: "We have the biggest market reach spread across India, with more than 6000 retail locations.",
    },
    {
      icon: <FaHandHoldingDollar />,
      title: "Financial Support",
      description: "We help resolve financial crunch problems as per eligibility, reducing customer acquisition costs significantly.",
    },
    {
      icon: <FaTrophy  />,
      title: "Customized Solutions",
      description: "We fulfill the business aspirations of our clients by providing customized and personal solutions.",
    },
    {
      icon: <FaBroadcastTower  />,
      title: "Platform to Expand Business Visibility",
      description: "We provide a platform to expand your business visibility, reaching new audiences and customers.",
    },
    {
      icon: <FaRegFaceSmileBeam   />,
      title: "Reduced Customer Acquisition Cost",
      description: "We help you significantly reduce your customer acquisition cost through efficient marketing and strategic partnerships.",
    },
    {
      icon: <RiCustomerService2Line />,
      title: "Highly Expert Team",
      description: "We fulfill the business aspirations of our clients by providing customized and personal solutions.",
    },
  ];

  const scrollTo = (index) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.clientWidth; // Visible container width
    container.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.sliderWrapper}>
      <h2 className={styles.title}>Why Choose Us</h2>
      <div className={styles.cardContainer} ref={scrollContainerRef}>
        {cards.map((card, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.icon}><i>{card.icon}</i></div>
            <div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerServices;
