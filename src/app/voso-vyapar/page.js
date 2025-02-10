import React from "react";
import VosoVyapar from "@/Home/vosoVyapar/VosoVyapar";
import ChooseVosovyapar from '@/Home/ChooseVosovyapar/ChooseVosovyapar'
import CustomerServices from "@/Home/Customer/CustomerServices";

const page = () => {
  return (
    <div>
      <VosoVyapar/>
      <ChooseVosovyapar/>
      <CustomerServices/>
    </div>
  );
};

export default page;
