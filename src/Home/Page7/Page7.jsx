import React from "react";
import styles from "@/Home/Page7/page7.module.css";
import { FaTruck } from "react-icons/fa";

const Page7 = () => {
  const cardData = [
    {
      image:
        "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/blog-page-01-768x628.png",
      title: "Technology • Sep 1, 2024",
      description: "Planning your online business goals with a specialist",
      button: "Read More →",
    },
    {
      image:
        "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/blog-page-02-768x628.png",
      title: "Architecture • Sep 1, 2024",
      description: "Boost your startup business with our digital agency",
      button: "Read More →",
    },
    {
      image:
        "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/blog-page-03-768x628.png",
      title: "Real Estate • Sep 1, 2024",
      description: "Proactive customer experience in the business",
      button: "Read More →",
    },
    {
      image:
        "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/blog-page-03-768x628.png",
      title: "News & Tips • Sep 1, 2024",
      description: "Data backup and recovery best practices small",
      button: "Read More →",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Who Can Use Voso Courier?</h1>
        {/* <button className={styles.viewAllButton}>View All Posts</button> */}
        <h1 className={styles.viewAllButton}>
          {" "}
          <i>
            <FaTruck />
          </i>{" "}
          Benefits for SMBs
        </h1>
      </div>
      <div className={styles.blogLayout}>
        {/* Featured Card */}
        <div className={styles.featuredCard}>
          <img
            src={cardData[0].image}
            alt={cardData[0].title}
            className={styles.featuredImage}
          />
          <div className={styles.featuredContent}>
            <h2>{cardData[0].title}</h2>
            <p>{cardData[0].description}</p>
            <a href="#" className={styles.readMore}>
              {cardData[0].button}
            </a>
          </div>
        </div>
        {/* Smaller Cards */}
        <div className={styles.smallCards}>
          {cardData.slice(1).map((data, index) => (
            <div className={styles.card} key={index}>
              <img
                src={data.image}
                alt={data.title}
                className={styles.cardImage}
              />
              <div className={styles.cardContent}>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <a href="#" className={styles.readMore}>
                  {data.button}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page7;
