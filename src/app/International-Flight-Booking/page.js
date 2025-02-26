// import IFB from '@/Home/flight/FlightBooking/IFB'
import React from 'react'
import dynamic from 'next/dynamic'
const IFB = dynamic(() => import("@/Home/flight/FlightBooking/IFB"));
const page = () => {
  return (
    <div>
      <IFB/>
    </div>
  )
}

export default page
