"use client";
import React from "react";
import dynamic from "next/dynamic";
const Page1 = dynamic(() =>
  import("@/Home/Partner-Components/Page1/Page1.jsx")
);
const Page2 = dynamic(() =>
  import("@/Home/Partner-Components/VosoCourierStandout/Page2")
);

const Page = () => {
  return (
    <div>
      <Page1 />
      <Page2 />
    </div>
  );
};

export default Page;
