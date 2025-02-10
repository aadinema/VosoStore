import CardSlider from "@/Home/merchantComponents/BenifitSMB/BenifitSMB";
import Page4 from "@/Home/merchantComponents/Page4/Page4";
import WorkTogether from "@/Home/merchantComponents/StartWithVosoCourier/WorkTogether";
import VosoCourier from "@/Home/merchantComponents/vosoCourier/VosoCourier"
import Page6 from "@/Home/Page6/Page6";
import React from "react";
const page = () => {
  return (
    <div>
      <Page6/>
      <Page4/>
      <CardSlider/>
      <VosoCourier/>
      <WorkTogether/>
    </div>
  );
};

export default page;
