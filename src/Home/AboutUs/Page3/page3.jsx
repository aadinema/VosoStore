"use client";

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './page3.module.css';

const Page3 = () => {
  const cardData = [
    {
      image: 'https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/team1.png',
      title: 'Marvin McKinney',
      description: 'CEO & Founder',
    },
    {
      image: 'https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/team2.png',
      title: 'Sophia Rodriguez',
      description: 'CEO & Founder',
    },
    {
      image: 'https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/team3.png',
      title: 'Marvin McKinney',
      description: 'CEO & Founder.',
    },
    {
      image: 'https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/team4.png',
      title: 'Alexander Cameron',
      description: 'CEO & Founder',
    },
    {
      image: 'https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/team5.png',
      title: 'Zachary Collins',
      description: 'Cyber Specialist',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, 
        },
      },
    ],
  };

  return (
    <div className={styles.App}>
      <h1 className={styles.header}>
        Our expert team is always <br /> ready to help you
      </h1>
      <Slider {...settings} className={styles.slider}>
        {cardData.map((data, index) => (
          <div key={index} className={styles.slickSlide}>
            <div className={styles.card}>
              <img src={data.image} alt={`Image of ${data.title}`} className={styles.image} />
              <h2 className={styles.heading}>{data.title}</h2>
              <p className={styles.paragraph}>{data.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Page3;
