import React from "react";
import styles from "./page1.module.css";

const Page2 = () => {
  const features = [
    {
      title: "Whitelabel and API-Based Flexibility",
      description: [
        "Whitelabel Solution: Launch your own branded courier aggregation platform with minimal investment.",
        "API Integration: Quickly integrate our APIs into your system for smooth courier and cargo service bookings.",
      ],
    },
    {
      title: "Cost-Effective Courier and Cargo Services",
      description: [
        "Access the lowest courier and cargo rates, ensuring competitiveness and profitability.",
      ],
    },
    {
      title: "Seamless Merchant Integration",
      description: [
        "Ideal for businesses with a merchant base, enabling effortless logistics management and value-added services.",
      ],
    },
    {
      title: "Best-in-Class Customer Support",
      description: [
        "Dedicated support for seamless operations and prompt issue resolution for your team and merchants.",
      ],
    },
  ];

  return (
    <>
      <div className={styles.mainContainer}>
        <h2 className={styles.heading}>
          Empowering Businesses to Become Logistics Aggregators
        </h2>
        <p className={styles.paragraph}>
          At Voso courier, we revolutionize logistics with our Partner Courier
          Solution, a robust Whitelabel and API-based platform that enables
          businesses with a significant merchant base to operate as aggregators
          of top courier companies. <br />
          By integrating our cutting-edge technology, you can seamlessly offer
          courier and cargo services from industry leaders like DTDC,
          Xpressbees, Blue Dart, Ekart, Amazon Shipping, and many more—all under
          your own brand.
        </p>
  
        <div className={styles.container}>
        <h1 className={styles.subheading}>
              Why Choose Voso Courier Partner Courier Solution?
            </h1>
          <div className={styles.left}>
            <div className={styles.primaryImage}>
              <img
                src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/thumb1-1.png"
                alt="img1"
                className={styles.image1}
              />
            </div>
          </div>

          <div className={styles.right}>
            

            {features.map((feature, index) => (
              <div key={index}>
                <h2 className={styles.miniheading}>{`${index + 1}. ${feature.title}`}</h2>
                {feature.description.map((desc, i) => (
                  <p key={i} className={styles.miniparagraph}>
                    • {desc}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page2;