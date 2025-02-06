import React from "react";
import styles from "./blog.module.css";
const Blog = () => {
  const cardData = [
    {
      image:
        "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/blog-page-01-768x628.png",
      title: "Technology Sep 1, 2024",
      description: "Planning your online business goals with a specialist",
      button:"Read more ->"
    },
    {
      image:
        "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/blog-page-02-768x628.png",
      title: "Technology Sep 1, 2024",
      description: "Boost your startup business with our digital agency",
      button:"Read more ->"
    },
    {
      image:
        "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/blog-page-03-768x628.png",
      title: "Technology Sep 1, 2024",
      description: "Proactive customer experience in the business",
      button:"Read more ->"
    },
  ];
  return (
    <>
      <div className={styles.App}>
        <div className={styles.buttonStyle}>

          <h1 className={styles.header}>
            Recent blog & articles <br /> about technology
          </h1>
          <div className={styles.buttons}>
            <button className={`${styles.button} ${styles.secondaryButton}`}>
              View Services
            </button>
          </div>
        </div>
        <div className={styles.cardGrid}>
          {cardData.map((data, index) => (
            <div className={styles.card}>
              <img src={data.image} alt={data.title} className={styles.image} />
              <h2 className={styles.heading}>{data.title}</h2>
              <p className={styles.paragraph}>{data.description}</p>
              <p className={styles.bt}>{data.button}</p>
            </div>
          ))}
        </div>
        
      </div>
      
    </>
  );
};

export default Blog;
