import React from "react";
import dynamic from "next/dynamic";
const AboutUs = dynamic(() => import("@/Home/AboutUs/AboutUs"));

const page = () => {
  return (
    <div>
      <AboutUs />
    </div>
  );
};

export default page;
