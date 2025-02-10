import React from "react";
import styles from "./page2.module.css";

const SSF = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <h1 className={styles.heading}>Software solution - Fintech</h1>
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
            <p className={styles.paragraph}>
            Our software solution is a comprehensive fintech platform that revolutionizes the way financial transactions are conducted. It offers a user-friendly interface and a robust backend infrastructure, empowering individuals and businesses to manage their finances efficiently and securely. The platform provides a range of features, including personal banking tools, budgeting capabilities, advanced investment options, and trading functionalities. Real-time market data, intelligent algorithms, and customizable dashboards enable users to make informed decisions and optimize their financial strategies. To ensure the security of sensitive financial information, our software incorporates advanced encryption and multi-factor authentication. It also seamlessly integrates with various payment gateways and third-party services, facilitating smooth transactions and access to a wide range of financial services. From fund management to investment monitoring and transactions, our fintech software offers a comprehensive solution for individuals and businesses alike.
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

export default SSF;
