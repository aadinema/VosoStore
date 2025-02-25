
import React from 'react'
import dynamic from 'next/dynamic'
const Career = dynamic(() => import("@/Home/career/career"));
const Page = () => {
  return (
    <>
      <Career/>
    </>
  )
}

export default Page
