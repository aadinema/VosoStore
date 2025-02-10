import React from "react";
import styles from '@/Home/Page6/Page6.module.css';
import { FaClock ,FaShieldAlt ,FaHeadset  } from "react-icons/fa";

const Page6 = () => {
  const data = [
    {
      img: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/illustration1.svg",
      number: <FaClock/>,
      heading: "Fast Delivery",
      paragraph:
        "We ensure quick and reliable delivery services.",
    },
    {
      img: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/illustration2.svg",
      number:<FaShieldAlt />,
      heading: "Secure Packaging",
      paragraph:
        "All items are packed with care for safety.",
    },
    {
      img: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/illustration3.svg",
      number:<FaHeadset />,
      heading: "24/7 Support",
      paragraph:
        "Our support team is available anytime.",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h1 className={styles.outerHeading}>
        Streamline Your Courier Operations <br /> with Voso Courier
        </h1>
        <p className={styles.paragraph}>At Voso Courier, we empower small and medium businesses (SMBs) to become aggregators of top courier and logistics companies, enabling you to provide seamless and cost-effective shipping solutions to your customers. Whether you’re looking to simplify courier operations or expand your service offerings, Voso Courier is your one-stop solution.</p>
      </div>

      <div className={styles.cardContainer}>
        {data.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageContainer}>
              <img src={item.img} alt={item.heading} className={styles.image} />
            </div>
            <div className={styles.textContainer}>
              <i className={styles.number}>{item.number}</i>
              <h3 className={styles.title}>{item.heading}</h3>
              <p className={styles.description}>{item.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page6;
