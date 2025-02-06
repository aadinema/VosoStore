import React from "react";
import styles from "./progress.module.css";

const Progress = () => {
  const progressData = [
    { title: "IT Solution & Management", value: 86 },
    { title: "Website & App Development", value: 72 },
    { title: "SEO & Digital Marketing", value: 83 },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          {/* Left Content */}
          <div className={styles.textSection}>
            <h2>Increasing business <br /> success with technology</h2>
            <p>
              Each demo built with Teba will look different. You can customize
              almost <br /> anything in the appearance of your website with only a few
              clicks. Each demo built with Teba will look different.
            </p>
          </div>

          {/* Progress Bars */}
          <div className={styles.progressSection}>
            {progressData.map((item, index) => (
              <div key={index} className={styles.progressBar}>
                <div className={styles.progressLabel}>
                  <span>{item.title}</span>
                  <span>{item.value}%</span>
                </div>
                <div className={styles.progressTrack}>
                  <div
                    className={styles.progressFill}
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Image */}
        <div className={styles.imageSection}>
          <div className={styles.mainImage}>
            <img
              src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/thumb3.png"
              alt="Team working together"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;
