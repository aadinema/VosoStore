// import BBPS from '@/Home/BBPS/BBPS/BBPS'
import React from 'react'
import dynamic from 'next/dynamic';
const BBPS = dynamic(() => import("@/Home/BBPS/BBPS/BBPS"));

const page = () => {
  return (
    <div>
      <BBPS/>
    </div>
  )
}

export default page
