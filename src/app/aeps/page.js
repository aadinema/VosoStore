// import AadhaarAEPS from '@/Home/AadhaarAEPS/AadhaarAEPS'
import React from 'react'
import dynamic from 'next/dynamic'
const AadhaarAEPS = dynamic(() => import("@/Home/AadhaarAEPS/AadhaarAEPS"));
const page = () => {
  return (
    <div>
      <AadhaarAEPS/>
    </div>
  )
}

export default page
