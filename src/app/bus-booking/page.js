// import Bus from '@/Home/DomesticTravelBooking/Bus/Page/Bus'
import React from 'react'
import dynamic from 'next/dynamic'
const Bus = dynamic(() =>
  import("@/Home/DomesticTravelBooking/Bus/Page/Bus")
);




const page = () => {
  return (
    <div>
      <Bus/>
    </div>
  )
}

export default page
