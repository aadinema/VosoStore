// import Hotel from '@/Home/DomesticTravelBooking/Hotel/Page/Hotel'
import React from 'react'
import dynamic from 'next/dynamic'
const Hotel = dynamic(() => import("@/Home/DomesticTravelBooking/Hotel/Page/Hotel"));

const page = () => {
  return (
    <div>
      <Hotel/>
    </div>
  )
}

export default page
