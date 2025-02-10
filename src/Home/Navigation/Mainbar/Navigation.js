"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "./Navigation.module.css";
import { IoMdArrowDroprightCircle } from "react-icons/io";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Track open dropdown
  const pathname = usePathname(); // Get current route

  // Toggle nested dropdown
  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

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
            {/* Home */}
            <li className={styles.navItem}>
              <Link
                href="/"
                className={
                  pathname === "/" ? styles.activeLink : styles.navLink
                }
              >
                Home
              </Link>
            </li>

            {/* About Us */}
            <li className={styles.navItem}>
              <Link
                href="/aboutUs"
                className={
                  pathname === "/aboutUs" ? styles.activeLink : styles.navLink
                }
              >
                About Us
              </Link>
            </li>

            {/* Services Dropdown */}
            <li className={styles.navItem}>
              <span
                className={styles.navLink}
                onClick={() => toggleDropdown("services")}
              >
                Services
              </span>
              <ul
                className={`${styles.dropdown} ${
                  openDropdown === "services" ? styles.dropdownOpen : ""
                }`}
              >
                {/* Shopping Nested Dropdown */}
                <li className={styles.navItem}>
                  <span
                    className={styles.navLink}
                    onClick={() => toggleDropdown("shopping")}
                  >
                    Shopping <IoMdArrowDroprightCircle />
                  </span>
                  <ul
                    className={`${styles.nestedDropdown} ${
                      openDropdown === "shopping"
                        ? styles.nestedDropdownOpen
                        : ""
                    }`}
                  >
                    {[
                      "Amazon-Associate-Partner",
                      "Flipkart-Associate-Partner",
                      "Ajio-Associate-Partner",
                      "Booking-Associate-Partner",
                      "Nykaa-Associate-Partner",
                    ].map((item) => (
                      <li key={item}>
                        <Link
                          href={`/shopping/${item.replace(/ /g, "-")}`}
                          className={styles.navLink}
                        >
                          {/* <Link
                          href={`/shopping/${item
                            .toLowerCase()
                            .replace(/ /g, "-")}`}
                          className={styles.navLink}
                        > */}
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                {/* Domestic Travel Booking Nested Dropdown */}
                <li className={styles.navItem}>
                  <span
                    className={styles.navLink}
                    onClick={() => toggleDropdown("domestic-travel")}
                  >
                    Domestic Travel Booking <IoMdArrowDroprightCircle />
                  </span>
                  <ul
                    className={`${styles.nestedDropdown} ${
                      openDropdown === "domestic-travel"
                        ? styles.nestedDropdownOpen
                        : ""
                    }`}
                  >
                    {[
                      "Bus-Tickets-Booking",
                      "Flight-Tickets-Booking",
                      "Hotel-Booking",
                      "Rail-Tickets-Booking",
                    ].map((item) => (
                      <li key={item}>
                        <Link
                          href={`/${item.replace(/ /g, "-")}`}
                          // href={`/domestic-travel/${item.replace(/ /g, "-")}`}
                          className={styles.navLink}
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                {/* Other Services */}
                {[
                  "Courier-Service",
                  "Bill Payments",
                  "Insurance",
                  "ONDC",
                  "Software-solution-Fintech",
                  "Aadhar-Enabled-Payments-System",
                  "BBPS",
                  "mATM(Micro-ATM-transactions)",
                  "Domestic-Money-Transfer(DMT)",
                  "Prepaid-Recharges",
                  "International-Flight-Booking",
                  "International-Hotel-Booking",
                  "Pan-Card",
                  "BFSI-Saas",
                  "Digital-Marketing-Services",
                ].map((service) => (
                  <li key={service}>
                    <Link
                      href={`/${service}`}
                      className={
                        pathname === `/${service}`
                          ? styles.activeLink
                          : styles.navLink
                      }
                    >
                      {service.replace(/-/g, " ")}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Voso Courier */}
            <li className={styles.navItem}>
              <span className={styles.navLink}>voso courier</span>
              <ul className={styles.dropdown}>
                {["Merchant-solutions", "Partner-solutions"].map((blog) => (
                  <li key={blog}>
                    <Link
                      href={`/${blog}`}
                      className={
                        pathname === `/${blog}`
                          ? styles.activeLink
                          : styles.navLink
                      }
                    >
                      {blog.replace(/-/g, " ")}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Pay */}
            <li className={styles.navItem}>
              <Link href="/Pay" className={styles.navLink}>
                Pay
              </Link>
            </li>

            {/* Voso-Vyapar */}
            <li className={styles.navItem}>
              <Link
                href="/voso-vyapar"
                className={
                  pathname === "/voso-vyapar"
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
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
