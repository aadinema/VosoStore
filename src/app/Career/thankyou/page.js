// import Thank from '@/Home/thankpage/thank'
import React from 'react'
import dynamic from 'next/dynamic'
const Thank=dynamic(() => import("@/Home/thankpage/thank"))
const Page = () => {
  return (
    <>
      <Thank/>
    </>
  )
}

export default Page
