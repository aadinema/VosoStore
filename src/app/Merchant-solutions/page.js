"use client";
import dynamic from "next/dynamic";
const CardSlider = dynamic(() =>
  import("@/Home/merchantComponents/BenifitSMB/BenifitSMB")
);
const Page4 = dynamic(() => import("@/Home/merchantComponents/Page4/Page4"));
const WorkTogether = dynamic(() =>
  import("@/Home/merchantComponents/StartWithVosoCourier/WorkTogether")
);
const VosoCourier = dynamic(() =>
  import("@/Home/merchantComponents/vosoCourier/VosoCourier")
);
const Page6 = dynamic(() => import("@/Home/Page6/Page6"));
import React from "react";
const page = () => {
  return (
    <div>
      <Page6 />
      <Page4 />
      <CardSlider />
      <VosoCourier />
      <WorkTogether />
    </div>
  );
};

export default page;
