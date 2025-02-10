"use client";
import React from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Booking.module.css";

// Dynamically import Slider
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const Booking = () => {
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
        <img src="https://vosostore.com/img/booking.png" alt="Ajio Logo" />
        <h2>Join the Leading Travel and Hospitality Network</h2>
        <p>
        Are you seeking a rewarding business opportunity in the travel and hospitality industry? VosoStore invites you to become a Booking.com Associate, offering you the chance to earn additional income by promoting a vast range of travel accommodations from one of the world's leading online booking platforms. With VosoStore’s guidance and Booking.com’s extensive listings, you can achieve significant success.
        </p>
        <button className={styles.joinButton}>
          <a href="#">Join Now</a>
        </button>
      </div>
      <h2>Why Partner with Us?</h2>
      <Slider {...settings} className={styles.carousel}>
        {[
          { title: "Maximize Your Earnings", text: "Earn competitive commissions by promoting a diverse range of products from Amazon's vast marketplace." },
          { title: "Extensive Product Range", text: "Choose from a wide array of fashion products to cater to various customer tastes and preferences." },
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

export default Booking;
