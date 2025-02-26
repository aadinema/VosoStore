// import SSF from '@/Home/SoftwareSolutionFintech/Page2/SSF'
import React from 'react'
import dynamic from 'next/dynamic'
const SSF=dynamic(() => import("@/Home/SoftwareSolutionFintech/Page2/SSF"));

const page = () => {
  return (
    <div>
      <SSF/>
    </div>
  )
}

export default page
