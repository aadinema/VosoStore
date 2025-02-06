// FlexboxLayout.js
import React from "react";
import styles from "./projects.module.css";

const projects = () => {
  const data = [
    {
      image: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/p5-1536x754.png",
      title: "Project for Marketing",
      description: "Business, Marketing",
    },
    {
      image: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/p4.png",
      title: "Marketing Agency Website",
      description: "Development, Marketing",
    },
    {
      image: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/p3.png",
      title: "Health App Development",
      description: "Development, Software",
    },
    {
      image: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/p2.png",
      title: "Cyber Security Analysis",
      description: "Security, Technology",
    },
    {
      image: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/p1.png",
      title: "Digital Product Design",
      description: "Design, Graphics",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Explore our recent projects</h1>
      </div>
      {/* First Row */}
      <div className={styles.row}>
        {data.slice(0, 2).map((item, index) => (
          <div key={index} className={styles.column}>
            <div className={styles.imageContainer}>
              <img src={item.image} alt={item.title} className={styles.image} />
              <div className={styles.textOverlay}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Second Row */}
      <div className={styles.row}>
        {data.slice(2).map((item, index) => (
          <div key={index} className={styles.column}>
            <div className={styles.imageContainer}>
              <img src={item.image} alt={item.title} className={styles.image} />
              <div className={styles.textOverlay}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default projects;
