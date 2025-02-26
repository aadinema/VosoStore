"use client";

import React from "react";
import Slider from "react-slick";
import styles from "./BusinessSolutions.module.css";

const BusinessSolutions = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const solutions = [
    { title: "To The Delivery", description: "Efficient delivery solutions tailored to your business needs." },
    { title: "Customer Solution", description: "Enhance customer satisfaction with our dedicated support." },
    { title: "Your Customer Service", description: "Streamline customer service operations with our tools." },
    { title: "How to Get Started", description: "Step-by-step guidance to kickstart your business journey." },
    { title: "Control Up", description: "Take control of your business processes with our solutions." },
    { title: "Main Consultation", description: "Expert consultation to optimize your business strategy." },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>We Provide Solutions to Elevate Your Business</h2>
      
      <div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {solutions.map((solution, index) => (
            <div key={index} className={styles.cardWrapper}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>{solution.title}</h3>
                <p className={styles.cardDescription}>{solution.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <h2 className={styles.subheading}>Why Choose Our Courier Franchise?</h2>
      <p className={styles.description}>We provide comprehensive solutions for your logistics needs.</p>

      <div className={styles.stepsContainer}>
        {["Contact Us", "Initial Consultation", "Franchise Agreement", "Training & Setup", "Launch Your Business"].map((step, index) => (
          <div key={index} className={styles.step}>{step}</div>
        ))}
      </div>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaHeading}>Start Offering mATM Services Today!</h2>
        <p className={styles.ctaText}>Join VOSO and provide your customers with secure, reliable, and efficient mATM transaction services.</p>
        <button className={styles.ctaButton}>Get Started</button>
      </section>
    </div>
  );
};

export default BusinessSolutions;
