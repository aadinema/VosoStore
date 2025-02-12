"use client"
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import styles from "./vosocarousel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carouselData = [
  {
    img: "/images/ms_5.jpg",
    alt: "Cable TV Bill Payment",
  },
  {
    img: "/images/ms_1.jpg",
    alt: "Education Fee Payment",
  },
  {
    img: "/images/ms_4.jpg",
    alt: "Water Bill Payment",
  },
  {
    img: "/images/ms_7.jpg",
    alt: "Postpaid Bill Payment",
  },
  {
    img: "/images/ms_9.jpg",
    alt: "Postpaid Bill Payment",
  },
  {
    img: "/images/ms_3.jpg",
    alt: "Postpaid Bill Payment",
  },
];

const VosoCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
        },
      },
    ],
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        {carouselData.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageContainer}>
              <Image
                src={item.img}
                alt={item.alt}
                width={400}
                height={250}
                className={styles.image}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VosoCarousel;