// import Page2 from '@/Home/ONDC/Page2/Page2'
import React from 'react'
import dynamic from 'next/dynamic'
const Page2 =dynamic(() => import("@/Home/ONDC/Page2/Page2"))
const page = () => {
  return (
    <div>
      <Page2/>
    </div>
  )
}

export default page
