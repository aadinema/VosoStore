"use client";
// import styles from "./page.module.css";
import Mainsection from "@/Home/MainSection/MainSection";
import WhyChooseUs from "@/Home/whyChooseUs/whyChooseUs";
import CardSlider from "@/Home/CardSlider/CardSlider";
import VosoCarousel from "@/Home/vosocarousel/Vosocarousel";
import Vosopage from "@/Home/Vosofirstpage/Vosopage";
import CourierServices from "@/Home/CourierServicesHome/CourierServices";

import "./globals.css";
import { useState, useEffect } from "react";
import Popup from "./homepagepopup/Popup";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true); // Show popup on page load
  }, []);

  return (
    <div>
      {/* <h1>home page</h1>/ */}

      {/* <Popup
        imageUrl="https://vosostore.com/img/voso_vyapar_celebration_offer_1000.png" // Replace with your actual image path
        isVisible={showPopup}
        onClose={() => setShowPopup(false)}
      /> */}

      <Popup
        imageUrl="https://vosostore.com/img/voso_vyapar_celebration_offer_1000.png" // Replace with your actual image path
        isVisible={showPopup}
        onClose={() => setShowPopup(false)}
      />
      <Vosopage />
      <Mainsection />
      <CourierServices />
      <VosoCarousel />
      <WhyChooseUs />
      <CardSlider />
    </div>
  );
}
