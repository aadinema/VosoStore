"use client";
import dynamic from "next/dynamic";

// ✅ Dynamically import components
const Nykaa = dynamic(() =>
  import("@/Home/shopping/Nykaa-Associate-Partner/NyKaaPage2/Nykaa")
);
const Page1 = dynamic(() =>
  import("@/Home/shopping/Nykaa-Associate-Partner/page1/Page1")
);
import React from 'react'

const page = () => {
  return (
    <div>
      <Page1/>
      <Nykaa/>
    </div>
  )
}

export default page
