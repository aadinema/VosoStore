"use client";

import React from "react";
import styles from "./AadhaarAEPS.module.css";

const AadhaarAEPS = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroHeading}>
          Aadhaar AePS (Aadhar Enabled Payments System) Services
        </h1>
        <p className={styles.heroDescription}>
          Gifts AePS services to your customers and earn the highest
          expectations in the industry using VOSO.
        </p>
      </section>

      {/* Introduction Section */}
      <section className={styles.introSection}>
        <h2 className={styles.sectionHeading}>What is AePS?</h2>
        <p className={styles.sectionText}>
          AePS is a unique payment system that allows users to pay through an
          Aadhaar card. Conceptualized by the NPCI, AePS enables customers to
          perform transactions such as cash deposits, withdrawals, balance
          inquiries, and more using their Aadhaar number and biometric
          authentication.
        </p>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <h2 className={styles.sectionHeading}>
          Why Provide AePS to Your Customers?
        </h2>
        <p className={styles.sectionText}>
          AePS allows users to perform business transactions using only their
          Aadhaar number. By offering AePS transaction services, you can attract
          more customers to your business and meet the highest expectations in
          the industry.
        </p>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <h3 className={styles.benefitTitle}>Increase in Customers</h3>
            <p className={styles.benefitText}>
              Offering AePS services helps you attract more customers to your
              business, increasing your revenue.
            </p>
          </div>
          <div className={styles.benefitCard}>
            <h3 className={styles.benefitTitle}>Increase in Business</h3>
            <p className={styles.benefitText}>
              AePS transactions are fast and reliable, ensuring customer
              satisfaction and repeat business.
            </p>
          </div>
        </div>
      </section>

      {/* Why VOSO Section */}
      <section className={styles.vosoSection}>
        <h2 className={styles.sectionHeading}>
          Why Provide AePS Services Through VOSO?
        </h2>
        <div className={styles.vosoGrid}>
          <div className={styles.vosoCard}>
            <h3 className={styles.vosoTitle}>High Commissions</h3>
            <p className={styles.vosoText}>
              Earn the highest commissions on every AePS transaction, increasing
              your income.
            </p>
          </div>
          <div className={styles.vosoCard}>
            <h3 className={styles.vosoTitle}>Reliable Transactions</h3>
            <p className={styles.vosoText}>
              VOSO ensures secure and reliable transactions, with no delays or
              defaults.
            </p>
          </div>
          <div className={styles.vosoCard}>
            <h3 className={styles.vosoTitle}>Secure Service</h3>
            <p className={styles.vosoText}>
              With best-in-class data security, VOSO ensures your transactions
              are safe and secure.
            </p>
          </div>
          <div className={styles.vosoCard}>
            <h3 className={styles.vosoTitle}>Easy Integration</h3>
            <p className={styles.vosoText}>
              VOSO's digital analytics system allows you to easily integrate
              AePS services into your business.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaHeading}>
          Start Offering AePS Services Today!
        </h2>
        <p className={styles.ctaText}>
          Join VOSO and provide your customers with secure, reliable, and
          efficient AePS transaction services.
        </p>
        <button className={styles.ctaButton}>Get Started</button>
      </section>
    </div>
  );
};

export default AadhaarAEPS;
