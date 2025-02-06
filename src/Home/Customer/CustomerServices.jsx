import React, { useRef, useState } from "react";
import styles from "./customer.module.css";

const CustomerServices = () => {
  const scrollContainerRef = useRef(null);


  const cards = [
    {
      icon:<i class="ri-customer-service-2-line"></i>,
      title: "Highly Expert Team",
      description: "We provide the most responsive and functional IT design",
      
    },
    {  
      icon:<i class="ri-customer-service-2-line"></i>,  
      title: "Data Tracking Security",
      description: "Developing a comprehensive IT strategy that aligns.",
      
    },
    {
      icon:<i class="ri-customer-service-2-line"></i>,    
      title: "IT Management Service",
      description: "Developing a comprehensive IT strategy that aligns.",
      
    },
    
  ];

  const scrollTo = (index) => {
    const container = scrollContainerRef.current;
    const cardWidth = container.clientWidth; // Width of the visible container
    container.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setActiveDot(index);
  };

  return (
    <div className={styles.sliderWrapper}>
      <h2 className={styles.title}>Our awesome services to give you success</h2>
      <div className={styles.cardContainer} ref={scrollContainerRef}>
        {cards.map((card, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.icon}>{card.icon}</div>
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
