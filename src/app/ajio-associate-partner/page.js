import dynamic from "next/dynamic";
const Ajio = dynamic(() =>
  import("@/Home/shopping/Ajio-Associate-Partner/FlipkartPage2/Ajio")
);
const Page1 = dynamic(() =>
  import("@/Home/shopping/Ajio-Associate-Partner/page1/Page1")
);

import React from 'react'

const page = () => {
  return (
    <div>
      <Page1/>
      <Ajio/>
    </div>
  )
}

export default page
