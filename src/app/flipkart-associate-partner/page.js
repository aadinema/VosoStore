import dynamic from "next/dynamic";
const FlipkartPage = dynamic(
  () => import("@/Home/shopping/Flipkart-Associate-Partner/FlipkartPage2/FlipkartPage")
);
const Page1 = dynamic(
  () => import("@/Home/shopping/Flipkart-Associate-Partner/page1/Page1")
);

import React from 'react'

const page = () => {
  return (
    <div>
      <Page1/>
      <FlipkartPage/>
      
    </div>
  )
}

export default page
