// import BFSISaas from '@/Home/bfsi-saas/BFSISaas/BFSISaas'
import React from 'react'
import dynamic from 'next/dynamic';
const BFSISaas = dynamic(() => import("@/Home/bfsi-saas/BFSISaas/BFSISaas"));

const page = () => {
  return (
    <div>
      <BFSISaas/>
    </div>
  )
}

export default page
