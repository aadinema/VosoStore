import React from 'react'
// import Flight from "@/Home/DomesticTravelBooking/Flight/Page/Flight"
import dynamic from 'next/dynamic'
const Flight = dynamic(() => import("@/Home/DomesticTravelBooking/Flight/Page/Flight"));
const page = () => {
  return (
    <div>
      <Flight/>
    </div>
  )
}

export default page
