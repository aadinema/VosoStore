"use client";
import React from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "@/Home/shopping/Amazon-Associate-Partner/AmazonPage2/AmazonPage.module.css";

// Dynamically import Slider
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const AmazonPage = () => {
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
        <img src="https://vosostore.com/img/amazon-logo.webp" alt="Amazon Logo" />
        <h2>Join the Leading E-Commerce Network</h2>
        <p>
          Are you ready to earn additional income through a trusted and proven method? 
          VosoStore offers an exclusive opportunity for individuals and businesses in 
          India to become Amazon Associates. Partner with us to leverage Amazon's extensive 
          product range and our expertise, maximizing your earnings through effective promotion.
        </p>
        <button className={styles.joinButton}>
          <a href="#">Join Now</a>
        </button>
      </div>
      <h2>Why Partner with Us?</h2>
      <Slider {...settings} className={styles.carousel}>
        {[
          { title: "Maximize Your Earnings", text: "Earn competitive commissions by promoting a diverse range of products from Amazon's vast marketplace." },
          { title: "Access a Wide Product Range", text: "Choose from millions of products to promote, catering to various customer needs and preferences." },
          { title: "Get Expert Support", text: "Receive guidance and support from VosoStore to enhance your marketing efforts." }
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

export default AmazonPage;
