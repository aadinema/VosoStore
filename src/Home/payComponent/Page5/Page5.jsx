import React from "react";
import styles from "@/Home/payComponent/Page5/page5.module.css";

const PricingPlan = ({ plan, price, description, buttonClass, buttonText, features, isMostPopular }) => {
  return (
    <div className={`${styles.subContainer} ${isMostPopular ? styles.mostPopular : ""}`}>
      {isMostPopular && <div className={styles.mostPopularTag}>Most Popular</div>}
      <div>
        <h4 className={styles.heading}>{description}</h4>
      </div>
      <div>
        <h2 className={styles.heading2}>
          {price} <span>(incl. 18% GST)</span>
        </h2>
      </div>
      <button href="#" className={buttonClass}>
        {buttonText}
      </button>
      <div>
        <ul className={styles.list}>
          {features.map((feature, index) => (
            <li key={index}>
              <i className="remixicon ri-check-line"></i>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Page5 = () => {
  const featuresGold = [
    "All Voso Store services",
    "1 month's Voso Vyapar subscription",
    "Courier solution",
    "Branding softcopy",
    "Higher commission (1-2% extra)",
  ];

  const featuresPlatinum = [
    "All Voso Store services",
    "1 year Voso Vyapar subscription",
    "Courier solution",
    "Branding softcopy",
    "Higher commission (1-2% extra)",
  ];

  const plans = [
    {
      plan: styles.subContainer,
      price: "$24,780",
      description: "Gold",
      buttonClass: styles.bt,
      buttonText: "Pay Now",
      features: featuresGold,
      isMostPopular: false,
    },
    {
      plan: styles.subContainer,
      price: "$35,400",
      description: "Platinum",
      buttonClass: styles.bt1,
      buttonText: "Pay Now",
      features: featuresPlatinum,
      isMostPopular: true,
    },
  ];

  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <h1 className={styles.mainHeading}>
          Pay and get access to our SAAS platform with a lifetime validity
        </h1>
        <h3>Book Your Voso Digital Store Now!!!</h3>
        <p>
          Initiate your business journey by paying through a safe & secure payment link.
        </p>
      </div>
      <div className={styles.planSection}>
        <h2 className={styles.sectionTitle}>Choose Your Subscription Plan</h2>
        <div className={styles.container}>
          {plans.map((plan, index) => (
            <PricingPlan key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page5;