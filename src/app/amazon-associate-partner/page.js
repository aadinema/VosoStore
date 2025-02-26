import dynamic from "next/dynamic";

// ✅ Dynamically Import Components
const AmazonPage = dynamic(() =>
  import("@/Home/shopping/Amazon-Associate-Partner/AmazonPage2/AmazonPage")
);
const Page1 = dynamic(() =>
  import("@/Home/shopping/Amazon-Associate-Partner/page1/Page1")
);


import React from "react";

const page = () => {
  return (
    <div>
       <Page1/>
      <AmazonPage/>
      
    </div>
  );
};

export default page;
