// import Apply from '@/Home/career/apply/apply'
import React from 'react'
import dynamic from 'next/dynamic'
const Apply = dynamic(() => import("@/Home/career/apply/apply"));

const page = (params) => {
  return (
    <>
     <Apply params={params}/> 
    </>
  )
}

export default page
