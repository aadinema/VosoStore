import dynamic from "next/dynamic";


const BusinessSolutions = dynamic(() =>
  import("@/Home/CourierServiceComponent/business-solutions/BusinessSolutions")
);
const Page1 = dynamic(() =>
  import("@/Home/CourierServiceComponent/page1/Page1")
);

import React from "react";

const Page = () => {
  return (
    <div>
      <Page1/>
      <BusinessSolutions />
    </div>
  );
};

export default Page;
