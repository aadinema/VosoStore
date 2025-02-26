
import dynamic from "next/dynamic";

// ✅ Dynamically import components
const Booking = dynamic(() =>
  import("@/Home/shopping/Booking-Associate-Partner/BookingPage2/Booking")
);

const Page1 = dynamic(() =>
  import("@/Home/shopping/Booking-Associate-Partner/page1/Page1")
);

import React from 'react'

const page = () => {
  return (
    <div>
      <Page1/>
      <Booking/>
    </div>
  )
}

export default page
