import React from "react";
import styles from "./page.module.css";

const BFSISaas = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <h1 className={styles.heading}>Transforming the Future of Banking and Financial Services</h1>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.primaryImage}>
              <img
                src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/thumb1-1.png"
                alt="img1"
                className={styles.image1}
              />
              <img
                src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/shape1.svg"
                alt="img2"
                className={styles.image3}
              />
            </div>
            <div className={styles.secondaryImage}>
              <img
                src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/shape2.svg"
                alt="img3"
                className={styles.image4}
              />
              <img
                src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/thumb2-1.png"
                alt="img4"
                className={styles.image2}
              />
            </div>
          </div>

          <div className={styles.right}>
            <p className={styles.paragraph}>BFSI-SaaS revolutionizes traditional banking by combining cloud computing and specialized software solutions. It offers scalable, cost-effective services, eliminating heavy upfront investments. Financial organizations can streamline processes, enhance operational efficiency, and gain a competitive edge. BFSI-SaaS enables secure data storage, seamless integration, and personalized services like robo-advisory and mobile banking. Real-time analytics, fraud detection, and automated decision-making improve operational agility and reduce errors. This transformative technology empowers organizations to embrace scalable, cost-efficient, and customer-centric solutions, staying ahead in the digital era.
            </p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src="https://vosostore.com/img/Group%201268.png" alt="SSF" />
        </div>
      </div>
    </>
  );
};

export default BFSISaas;
