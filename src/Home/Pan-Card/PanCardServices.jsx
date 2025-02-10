"use client";

import React from "react";
import styles from "./PanCardServices.module.css";

const PanCardServices = () => {
  return (
    <div className={styles.mainContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroHeading}>
          Provide NSDL e-PAN Services and Start PAN Card Business
        </h1>
        <p className={styles.heroDescription}>
          Our franchise will also let you become an NSDL e-PAN card service
          provider and open an opportunity to start a PAN card business. It comes
          with many facilities and services on the VOSO portal.
        </p>
      </section>

      {/* Introduction Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>Why Choose VOSO for PAN Card Services?</h2>
        <p className={styles.sectionText}>
          Our store partners can provide NSDL e-PAN card services to their
          customers easily through our VOSO portal. Franchise partners can apply
          for a PAN card and check the status of the PAN card on behalf of their
          retail customers.
        </p>
      </section>

      {/* Benefits Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>Benefits of PAN Card</h2>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <h3 className={styles.benefitTitle}>Identity Proof</h3>
            <p className={styles.benefitText}>
              A PAN card is widely accepted as proof of identity for various
              governmental and non-governmental organizations.
            </p>
          </div>
          <div className={styles.benefitCard}>
            <h3 className={styles.benefitTitle}>Financial Transactions</h3>
            <p className={styles.benefitText}>
              Essential for filing income tax returns, claiming tax refunds, and
              other financial transactions.
            </p>
          </div>
          <div className={styles.benefitCard}>
            <h3 className={styles.benefitTitle}>Property and Vehicle Transactions</h3>
            <p className={styles.benefitText}>
              Required for the purchase and sale of immovable property, vehicles,
              and securities.
            </p>
          </div>
          <div className={styles.benefitCard}>
            <h3 className={styles.benefitTitle}>Credit Card and Loans</h3>
            <p className={styles.benefitText}>
              Necessary for availing credit cards, loans, and other financial
              services.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaHeading}>Start Your PAN Card Business Today!</h2>
        <p className={styles.ctaText}>
          Join VOSO and provide your customers with secure, reliable, and
          efficient PAN card services.
        </p>
        <button className={styles.ctaButton}>Get Started</button>
      </section>
    </div>
  );
};

export default PanCardServices;