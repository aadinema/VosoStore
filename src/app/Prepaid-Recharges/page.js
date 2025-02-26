// import Prepaid from '@/Home/Prepaid-Recharges/Page2/Prepaid'
import React from 'react'
import dynamic from 'next/dynamic'
const Prepaid = dynamic(() => import("@/Home/Prepaid-Recharges/Page2/Prepaid"))

const page = () => {
  return (
    <div>
      <Prepaid/>
    </div>
  )
}

export default page
