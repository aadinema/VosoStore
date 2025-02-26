// import Rail from '@/Home/DomesticTravelBooking/Rail/Page/Rail'
import React from 'react'
import dynamic from 'next/dynamic'
const Rail = dynamic(() => import("@/Home/DomesticTravelBooking/Rail/Page/Rail"));

const page = () => {
  return (
    <div>
      <Rail/>
    </div>
  )
}

export default page
