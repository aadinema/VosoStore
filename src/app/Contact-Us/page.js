import React from "react";
// import ContactUs from "@/Home/Contact/Contact";
import dynamic from "next/dynamic";
const ContactUs=dynamic(() => import("@/Home/Contact/Contact"));
const page = () => {
  return (
    <div>
      <ContactUs/>
    </div>
  );
};

export default page;
