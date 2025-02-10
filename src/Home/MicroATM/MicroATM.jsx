"use client";

import React from "react";
import styles from "./MicroATM.module.css";

const MicroATM = () => {
  return (
    <div className={styles.mainContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroHeading}>mATM Services (Micro ATM Services)</h1>
        <p className={styles.heroDescription}>
          Now you can also offer mATM transactions to your customers through the
          VOSO mATM services and earn the highest commission on each mATM
          transaction.
        </p>
      </section>

      {/* What is mATM Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>What is mATM?</h2>
        <p className={styles.sectionText}>
          mATM or micro ATM is a device that allows users to withdraw cash and
          check balance inquiries from any Kirana shop, local store, or e-service
          portals without going to banks and waiting in long queues. The mATM
          device is operated by an individual and is linked to the servers of all
          banks currently operational in India, both regional and national.
        </p>
      </section>

      {/* Why VOSO Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>Why VOSO?</h2>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <h3 className={styles.benefitTitle}>Highest Commissions</h3>
            <p className={styles.benefitText}>
              Offer mATM services to your customers through VOSO and earn the
              highest commission on each successful transaction.
            </p>
          </div>
          <div className={styles.benefitCard}>
            <h3 className={styles.benefitTitle}>Accept Credit and Debit Cards</h3>
            <p className={styles.benefitText}>
              Increase your sales by accepting credit and debit cards from all
              major banks and credit card providers.
            </p>
          </div>
          <div className={styles.benefitCard}>
            <h3 className={styles.benefitTitle}>No Wait, No Delays</h3>
            <p className={styles.benefitText}>
              Experience lightning-fast transactions with receipt generation
              within 10 seconds of completed transactions.
            </p>
          </div>
          <div className={styles.benefitCard}>
            <h3 className={styles.benefitTitle}>Real-Time Status Visibility</h3>
            <p className={styles.benefitText}>
              Get real-time transaction data even during power cuts or server
              downtimes.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaHeading}>Start Offering mATM Services Today!</h2>
        <p className={styles.ctaText}>
          Join VOSO and provide your customers with secure, reliable, and
          efficient mATM transaction services.
        </p>
        <button className={styles.ctaButton}>Get Started</button>
      </section>
    </div>
  );
};

export default MicroATM;