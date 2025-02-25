// import JobPosting from '@/Home/career/job-posting/jobPosting'
import React from "react";
import dynamic from "next/dynamic";
const JobPosting = dynamic(() =>
  import("@/Home/career/job-posting/jobPosting")
);
const Page = ({ params }) => {
  console.log(params, "params");

  return (
    <>
      <JobPosting slug={params.slug} />
    </>
  );
};

export default Page;
