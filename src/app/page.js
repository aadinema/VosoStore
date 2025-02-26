"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

import "./globals.css";

// ✅ Dynamically Import Components
const Mainsection = dynamic(() => import("@/Home/MainSection/MainSection"));
const WhyChooseUs = dynamic(() => import("@/Home/whyChooseUs/whyChooseUs"));
const CardSlider = dynamic(() => import("@/Home/CardSlider/CardSlider"));
const VosoCarousel = dynamic(() => import("@/Home/vosocarousel/Vosocarousel"));
const Vosopage = dynamic(() => import("@/Home/Vosofirstpage/Vosopage"));
const CourierServices = dynamic(() =>
  import("@/Home/CourierServicesHome/CourierServices")
);
const Popup = dynamic(() => import("./homepagepopup/Popup"), { ssr: false }); // Disable SSR for Popup

export default function Home() {
  const pathname = usePathname();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasPopupBeenShown = sessionStorage.getItem("popupShown");

    if (!hasPopupBeenShown) {
      setShowPopup(true);
      sessionStorage.setItem("popupShown", "true");
    }
  }, []); // Runs only on first mount

  return (
    <div>
      <Popup
        imageUrl="https://vosostore.com/img/voso_vyapar_celebration_offer_1000.png"
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
