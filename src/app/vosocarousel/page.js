// import Vosocarousel from "@/Home/vosocarousel/Vosocarousel";
import React from "react";
import dynamic from "next/dynamic";
const Vosocarousel = dynamic(() => import("@/Home/vosocarousel/Vosocarousel"));
const page = () => {
  return (
    <div>
      <Vosocarousel />
    </div>
  );
};

export default page;
