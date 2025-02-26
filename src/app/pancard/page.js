// import PanCardServices from '@/Home/pancard/PanCardServices'
import dynamic from 'next/dynamic'
const PanCardServices = dynamic(() => import("@/Home/pancard/PanCardServices"));
import React from 'react'

const page = () => {
  return (
    <div>
      <PanCardServices/>
    </div>
  )
}

export default page
