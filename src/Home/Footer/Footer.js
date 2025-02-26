import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo and Description */}
        <div className={styles.section}>
          <Link href="/">
            <Image
              src="/vosologo/vosostorelogo.png"
              alt="logo"
              width={90}
              height={35}
              priority
            />
          </Link>
          <p className={styles.description}>
            Each demo built with Teba will look different. You can customize
            almost anything in the appearance of your website with only a few.
          </p>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialIcon}>
              <i className="ri-facebook-fill"></i>
            </a>
            <a href="#" className={styles.socialIcon}>
              <i className="ri-linkedin-fill"></i>
            </a>
            <a href="#" className={styles.socialIcon}>
              <i className="remixicon ri-twitter-fill"></i>
            </a>
            <a href="#" className={styles.socialIcon}>
              <i className="ri-instagram-fill"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.section}>
          <h3 className={styles.title}>Quick Links</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Link href="/aboutUs">About Us</Link>
            </li>
            <li className={styles.listItem}>
              <a href="#">Become VOSO Store Partner</a>
            </li>
            <li className={styles.listItem}>
              <a href="#">Pricing</a>
            </li>
            <li className={styles.listItem}>
              <a href="#">Blogs</a>
            </li>
            <li className={styles.listItem}>
              <Link href="/Contact-Us">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className={styles.section}>
          <h3 className={styles.title}>Services</h3>
          <ul className={styles.list}>
<<<<<<< HEAD
            <li className>Bill Payments</li>
            <li>
              <a href="/Prepaid-Recharges">Prepaid Recharge</a>
            </li>
            <li>Domestic Money Transfer</li>
            <li>Online Shopping</li>
            <li>Travel Booking</li>
            <li>
              <a href="/Pan-Card">Pan Card</a>
            </li>
            <li>
              <a href="/Insurance">Insurance</a>
            </li>
=======
            <li className={styles.listItem}>
              <Link href="/Bill-Payments">Bill Payments</Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/Prepaid-Recharges">Prepaid Recharge</Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/Domestic-Money-Transfer">Domestic Money Transfer</Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/Online-Shopping">Online Shopping</Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/Travel-Booking">Travel Booking</Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/Pan-Card">Pan Card</Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/Insurance">Insurance</Link>
            </li>
>>>>>>> e45d1d8 (update vosostore)
          </ul>
        </div>

        {/* Information */}
        <div className={styles.section}>
          <h3 className={styles.title}>Useful Information</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/terms-and-conditions">Terms & Conditions</Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/refund-policy">Refund Policy</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>
          Copyright © 2021, All Right Reserved at VOSO RETAIL TECH PRIVATE
          LIMITED
        </p>
      </div>
    </footer>
  );
};

export default Footer;