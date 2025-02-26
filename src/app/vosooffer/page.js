import React from "react";
// import Mainsection from '../../Home/MainSection/MainSection'
import dynamic from "next/dynamic";
const Mainsection = dynamic(() => import("@/Home/MainSection/MainSection"));

const page = () => {
  return (
    <div>
      <Mainsection />
    </div>
  );
};

export default page;
