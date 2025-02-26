"use client";
import React from "react";
import dynamic from "next/dynamic";

// ✅ Dynamically import components
const VosoVyapar = dynamic(() => import("@/Home/vosoVyapar/VosoVyapar"));
const ChooseVosovyapar = dynamic(() =>
  import("@/Home/ChooseVosovyapar/ChooseVosovyapar")
);
const CustomerServices = dynamic(() =>
  import("@/Home/Customer/CustomerServices")
);

const page = () => {
  return (
    <div>
      <VosoVyapar />
      <ChooseVosovyapar />
      <CustomerServices />
    </div>
  );
};

export default page;
