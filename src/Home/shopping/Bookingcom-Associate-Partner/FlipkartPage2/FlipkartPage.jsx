"use client";
import React from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./FlipkartPage.module.css";

// Dynamically import Slider
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const FlipkartPage = () => {
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
        <img src="https://vosostore.com/img/flipkart.png" alt="Flipkart Logo" />
        <h2>Explore a Lucrative Business Opportunity</h2>
        <p>
        Are you looking to explore a lucrative business opportunity in the world of e-commerce? VosoStore invites you to become a Flipkart Associate, offering you the chance to earn additional income by promoting products from one of India’s largest online marketplaces. With VosoStore’s expertise and Flipkart’s vast product range, you can achieve remarkable success.
        </p>
        <button className={styles.joinButton}>
          <a href="#">Join Now</a>
        </button>
      </div>
      <h2>Why Partner with Us?</h2>
      <Slider {...settings} className={styles.carousel}>
        {[
          { title: "Maximize Your Earnings", text: "Earn competitive commissions by promoting a diverse range of products from Amazon's vast marketplace." },
          { title: "Vast Product Range", text: "Choose from millions of products to promote and cater to a diverse audience." },
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

export default FlipkartPage;
