"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "./Navigation.module.css";
import { IoIosArrowDown ,IoMdArrowDropdownCircle } from "react-icons/io";
import Popup from "@/app/ScheduleBtPopup/PopupModel";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Track open dropdown
  const [openNestedDropdown, setOpenNestedDropdown] = useState(null); // Track open nested dropdown
  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal state
  const pathname = usePathname(); // Get current route

  // Toggle dropdown
  const toggleDropdown = (dropdownName) => {
    if (openDropdown === dropdownName) {
      setOpenDropdown(null); // Close dropdown if it's already open
      setOpenNestedDropdown(null); // Close nested dropdown as well
    } else {
      setOpenDropdown(dropdownName); // Open the clicked dropdown
      setOpenNestedDropdown(null); // Close any open nested dropdown
    }
  };

  // Toggle nested dropdown
  const toggleNestedDropdown = (nestedDropdownName) => {
    if (openNestedDropdown === nestedDropdownName) {
      setOpenNestedDropdown(null); // Close nested dropdown if it's already open
    } else {
      setOpenNestedDropdown(nestedDropdownName); // Open the clicked nested dropdown
    }
  };

  // Close all dropdowns and menu
  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
    setOpenNestedDropdown(null);
  };

  return (
    <header className={styles.navbar}>
      {/* Main Navbar */}
      <div className={styles.mainNavbar}>
        <div className={styles.logo}>
          <Link href="/" onClick={closeMenu}>
            <Image
              src="/vosologo/vosostorelogo.png"
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
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>

            {/* About Us */}
            <li className={styles.navItem}>
              <Link
                href="/about"
                className={
                  pathname === "/about" ? styles.activeLink : styles.navLink
                }
                onClick={closeMenu}
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
                Services{" "}
                <i>
                  <IoIosArrowDown  />
                </i>
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
                    onClick={() => toggleNestedDropdown("shopping")}
                  >
                    Shopping{" "}
                    <i>
                      <IoIosArrowDown />
                      
                    </i>
                  </span>
                  <ul
                    className={`${styles.nestedDropdown} ${
                      openNestedDropdown === "shopping"
                        ? styles.nestedDropdownOpen
                        : ""
                    }`}
                  >
                    {[
  { label: "Amazon Associate Partner", link: "amazon-associate-partner" },
  { label: "Flipkart Associate Partner", link: "flipkart-associate-partner" },
  { label: "Ajio Associate Partner", link: "ajio-associate-partner" },
  { label: "Booking Associate Partner", link: "booking-associate-partner" },
  { label: "Nykaa Associate Partner", link: "nykaa-associate-partner" },
].map((item) => (
                      <li key={item.link}>
                        <Link
                          href={`/${item.link.replace(/ /g, "-")}`}
                          className={styles.navLink}
                          onClick={closeMenu}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                {/* Domestic Travel Booking Nested Dropdown */}
                <li className={styles.navItem}>
                  <span
                    className={styles.navLink}
                    onClick={() => toggleNestedDropdown("domestic-travel")}
                  >
                    Domestic Travel Booking{" "}
                    <i>
                      <IoIosArrowDown />
                    </i>
                  </span>
                  <ul
                    className={`${styles.nestedDropdown} ${
                      openNestedDropdown === "domestic-travel"
                        ? styles.nestedDropdownOpen
                        : ""
                    }`}
                  >
                    {[
  { label: "Bus Tickets Booking", link: "bus-booking" },
  { label: "Flight Tickets Booking", link: "flight" },
  { label: "Hotel Booking", link: "hotel" },
  { label: "Rail Tickets Booking", link: "rail-booking" },
].map((item) => (
                      <li key={item.link}>
                        <Link
                          href={`/${item.link.replace(/ /g, "-")}`}
                          className={styles.navLink}
                          onClick={closeMenu}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                {/* Other Services */}
                {[
  { label: "Courier Service", link: "courier-service" },
  { label: "Bill Payments", link: "bill-payments" },
  { label: "Insurance", link: "insurance" },
  { label: "ONDC", link: "ondc" },
  { label: "Software Solution - Fintech", link: "software-solution-saas" },
  { label: "Aadhar Enabled Payments System", link: "aeps" },
  { label: "BBPS", link: "bill-payment" },
  { label: "mATM (Micro ATM Transactions)", link: "matm-micro-atm-transactions" },
  { label: "Domestic Money Transfer (DMT)", link: "domestic-money-transfer" },
  { label: "Prepaid Recharges", link: "prepaid-recharges" },
  { label: "International Flight Booking", link: "flight" },
  { label: "International Hotel Booking", link: "hotel" },
  { label: "Pan Card", link: "pancard" },
  { label: "BFSI SaaS", link: "bfsi-saas" },
  { label: "Digital Marketing Services", link: "digital-marketing-services" },
].map((service) => (
                  <li key={service.label}>
                    <Link
                      href={`/${service.link}`}
                      className={
                        pathname === `/${service.link}`
                          ? styles.activeLink
                          : styles.navLink
                      }
                      onClick={closeMenu}
                    >
                      {service.label.replace(/-/g, " ")}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Voso Courier */}
            <li className={styles.navItem}>
              <span
                className={styles.navLink}
                onClick={() => toggleDropdown("voso-courier")}
              >
                voso courier{" "}
                <i>
                  <IoIosArrowDown />
                </i>
              </span>
              <ul
                className={`${styles.dropdown} ${
                  openDropdown === "voso-courier" ? styles.dropdownOpen : ""
                }`}
              >
                {["merchant-solutions", "partner-solutions"].map((blog) => (
                  <li key={blog}>
                    <Link
                      href={`/${blog}`}
                      className={
                        pathname === `/${blog}`
                          ? styles.activeLink
                          : styles.navLink
                      }
                      onClick={closeMenu}
                    >
                      {blog.replace(/-/g, " ")}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Pay */}
            <li className={styles.navItem}>
              <Link href="/Pay" className={styles.navLink} onClick={closeMenu}>
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
                onClick={closeMenu}
              >
                Voso-Vyapar
              </Link>
            </li>

            {/* Contact Us */}
            <li className={styles.navItem}>
              <Link
                href="/contact-us"
                className={
                  pathname === "/contact-us"
                    ? styles.activeLink
                    : styles.navLink
                }
                onClick={closeMenu}
              >
                Contact Us
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                href="/career"
                className={
                  pathname === "/career" ? styles.activeLink : styles.navLink
                }
                onClick={closeMenu}
              >
                Career
              </Link>
            </li>
          </ul>

          {/* Navbar Actions */}
          <div className={styles.actions}>
            <button
              className={`${styles.btn} ${styles.buttonGlow}`}
              onClick={() => setIsModalOpen(true)} // Open modal
            >
              Schedule a demo
            </button>
            <button className={`${styles.btn} ${styles.buttonGlow}`}>
              Store Partners Login
            </button>
          </div>
        </nav>
      </div>
      {/* Render the modal */}
      <Popup isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
};

export default Navigation;
