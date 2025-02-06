import React from "react";
import styles from "./Feedback.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    quote:
      "“ Working with several word press themes and templates the last years, I only can say this is best in every level. I use it for my company and the reviews that I have already are all excellent. Not only the design but the code quality ”",
    author: "Alexander Cameron",
    role: "Lead Developer",
  },
  {
    quote:
      "“ Working with several word press themes and templates the last years, I only can say this is best in every level. I use it for my company and the reviews that I have already are all excellent. Not only the design but the code quality ”",
    author: "Marvin McKinney",
    role: "Product Manager",
  },
  {
    quote:
      "“ Working with several word press themes and templates the last years, I only can say this is best in every level. I use it for my company and the reviews that I have already are all excellent. Not only the design but the code quality ”",
    author: "Marvin McKinney",
    role: "Product Manager",
  },
  {
    quote:
      "“ Working with several word press themes and templates the last years, I only can say this is best in every level. I use it for my company and the reviews that I have already are all excellent. Not only the design but the code quality ”",
    author: "Marvin McKinney",
    role: "Product Manager",
  },
];

const CustomerFeedback = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.heading}>
        Don’t take our word,see <br /> what our customers say
      </h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
           
          <div key={index} className={styles.card}>
            <div>
            <img
              src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/quote.svg"
              alt="Quote Icon"
              className={styles.quoteIcon}
            />
            </div>
            <div className={styles.right}>
            <p className={styles.quote}>{testimonial.quote}</p>
            <div className={styles.starContainer}>
              <ul className={styles.starIcon}>
                <li><i className="remixicon ri-star-fill"></i></li>
                <li><i className="remixicon ri-star-fill"></i></li>
                <li><i className="remixicon ri-star-fill"></i></li>
                <li><i className="remixicon ri-star-fill"></i></li>
                <li><i className="remixicon ri-star-fill"></i></li>
               
              </ul>
            </div>
            <h3 className={styles.author}>{testimonial.author}</h3>
            <p className={styles.role}>{testimonial.role}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomerFeedback;
