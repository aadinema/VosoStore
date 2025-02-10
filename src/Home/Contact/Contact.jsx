import React from "react";
import styles from "./contact.module.css";
import Section from "@/Home/heroSecton/Section"

const ContactUs = () => {
  return (
    <>
    
      <div className={styles.container}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.subtitle}>
          Home <span className={styles.subtitle2}>&gt;</span> Contact Us
        </p>
      </div>

      <Section />
      
      {/* Map Section */}
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3679.440499972661!2d75.89281657429282!3d22.749028226482878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1737404759537!5m2!1sen!2sin"
          style={{ border: "0", width: "100%", height: "100%" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
      </div>

      
  
    </>
  );
};

export default ContactUs;
