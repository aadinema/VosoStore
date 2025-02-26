// import MicroATM from '@/Home/MicroATM/MicroATM'
import React from 'react'
import dynamic from 'next/dynamic'
const MicroATM = dynamic(() => import("@/Home/MicroATM/MicroATM"));
const page = () => {
  return (
    <div>
      <MicroATM/>
    </div>
  )
}

export default page
