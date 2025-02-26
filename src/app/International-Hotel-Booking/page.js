// import IHB from '@/Home/hotel/HotelBooking/IHB'
import React from 'react'
import dynamic from 'next/dynamic'
const IHB = dynamic(() => import("@/Home/hotel/HotelBooking/IHB"));

const page = () => {
  return (
    <div>
      <IHB/>
    </div>
  )
}

export default page
