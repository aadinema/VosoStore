// import WhyChooseUs from "@/Home/whyChooseUs/whyChooseUs";
import React from "react";
import dynamic from "next/dynamic";
const WhyChooseUs = dynamic(() => import("@/Home/whyChooseUs/whyChooseUs"));
const page = () => {
  return (
    <div>
      <WhyChooseUs />
    </div>
  );
};

export default page;
