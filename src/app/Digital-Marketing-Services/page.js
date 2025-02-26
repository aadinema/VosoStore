import dynamic from "next/dynamic";
const Homepage = dynamic(() =>
  import("@/Home/Digital-Marketing-Services/homepage/Homepage")
);
const Page2 = dynamic(() =>
  import("@/Home/digital-marketing-services/Page2/Page2")
);
const Page3 = dynamic(() =>
  import("@/Home/digital-marketing-services/Page3/Page3")
);
import React from "react";

const page = () => {
  return (
    <div>
      <Homepage />
      <Page2 />
      <Page3 />
    </div>
  );
};

export default page;
