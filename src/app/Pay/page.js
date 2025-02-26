// import Page5 from "@/Home/payComponent/Page5/Page5"
import React from "react";
import dynamic from "next/dynamic";
const Page5 = dynamic(() => import("@/Home/payComponent/Page5/Page5"));
const page = () => {
  return (
    <div>
      <Page5/>
    </div>
  );
};

export default page;
