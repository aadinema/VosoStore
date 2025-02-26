// import DMTB from '@/Home/DomesticMTB/DMTB/DMTB'
import React from 'react'
import dynamic from 'next/dynamic'
const DMTB = dynamic(() => import("@/Home/DomesticMTB/DMTB/DMTB"));
const page = () => {
  return (
    <div>
      <DMTB/>
    </div>
  )
}

export default page
