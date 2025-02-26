// import CardSlider from "@/Home/CardSlider/CardSlider";
import React from "react";
import dynamic from "next/dynamic";
const CardSlider = dynamic(() => import("@/Home/CardSlider/CardSlider"));
const page = () => {
  return (
    <div>
      <CardSlider/>
    </div>
  );
};

export default page;
