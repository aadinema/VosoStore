"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get current route

  return (
    <header className={styles.navbar}>
      {/* Main Navbar */}
      <div className={styles.mainNavbar}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/images/vosostorelogo.png"
              alt="logo"
              width={90}
              height={35}
              priority
            />
          </Link>
        </div>
        {/* Hamburger Menu */}
        <button
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
        {/* Navigation Links */}
        <nav className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ""}`}>
          <ul className={styles.navList}>
            {/* Demos Dropdown */}
            <li className={styles.navItem}>
              <span className={styles.navLink}>Home</span>
              <ul className={styles.dropdown}>
                {[
                  "main-demo",
                  "it-solutions",
                  "Tech-Agency",
                  "Startup-Home",
                  "IT-Consulting",
                  "Software-Company",
                  "Digital-Agency",
                  "Tech-Company",
                ].map((demo) => (
                  <li key={demo}>
                    <Link
                      href={`/demos/${demo}`}
                      className={
                        pathname === `/demos/${demo}`
                          ? styles.activeLink
                          : styles.navLink
                      }
                    >
                      {demo.replace("-", " ")}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Pages Dropdown */}
            <li className={styles.navItem}>
              <span className={styles.navLink}>About Us</span>
              <ul className={styles.dropdown}>
                {[
                  "About-Us",
                  "Services",
                  "Team",
                  "Team-Details",
                  "Utility",
                  "Faqs",
                  "404",
                  "Testimonial",
                ].map((page) => (
                  <li key={page}>
                    <Link
                      href={`/pages/${page}`}
                      className={
                        pathname === `/pages/${page}`
                          ? styles.activeLink
                          : styles.navLink
                      }
                    >
                      {page.replace("-", " ")}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Portfolio Dropdown */}
            <li className={styles.navItem}>
              <span className={styles.navLink}>Services</span>
              <ul className={styles.dropdown}>
                {[
                  "Courier Service ",
                  "Shopping",
                  "Bill Payments",
                  "Insurance",
                  "ONDC",
                  "Software solution - Fintech",
                  "Aadhar Enabled Payments System",
                  "BBPS",
                  "mATM (Micro ATM transactions)",
                  "Domestic Money Transfer(DMT",
                  "Prepaid Recharges",
                  "International Flight Booking",
                  "International Hotel Booking",
                  "Pan Card",
                ].map((portfolio) => (
                  <li key={portfolio}>
                    <Link
                      href={`/portfolio/${portfolio}`}
                      className={
                        pathname === `/portfolio/${portfolio}`
                          ? styles.activeLink
                          : styles.navLink
                      }
                    >
                      {portfolio.replace("-", " ")}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Blog Dropdown */}
            <li className={styles.navItem}>
              <span className={styles.navLink}>voso courier</span>
              <ul className={styles.dropdown}>
                {["Merchant solutions", "Partner solutions"].map((blog) => (
                  <li key={blog}>
                    <Link
                      href={`/blog/${blog}`}
                      className={
                        pathname === `/blog/${blog}`
                          ? styles.activeLink
                          : styles.navLink
                      }
                    >
                      {blog ? blog.replace("-", " ") : "Blog"}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Pay */}
            <li className={styles.navItem}>
              <Link href="/Contact-Us" className={styles.navLink}>
                Pay
              </Link>
            </li>
            {/* Voso-Vyapar */}
            <li className={styles.navItem}>
              <Link
                href="/Contact-Us"
                className={
                  pathname === "/Contact-Us"
                    ? styles.activeLink
                    : styles.navLink
                }
              >
                Voso-Vyapar
              </Link>
            </li>
            {/* Contact Us */}
            <li className={styles.navItem}>
              <Link
                href="/Contact-Us"
                className={
                  pathname === "/Contact-Us"
                    ? styles.activeLink
                    : styles.navLink
                }
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Navbar Actions */}
          <div className={styles.actions}>
            <i
              className={`fas fa-search ${styles.searchIcon}`}
              aria-hidden="true"
            ></i>
            <button className={`${styles.btn} ${styles.buttonGlow}`}>
              Schedule a demo
            </button>
            <button className={styles.btn}>Store Partner's Login</button>

            <div className={styles.hambugerBt}>
              <button className={styles.ln}>Learn More</button>
              <button className={styles.ct}>Contact Us</button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
