import React from "react";
import data from "../../data/jobs.json";
import JobListing from "./JobListing/JobListing";
const Jobs = () => {
  return (
    <div>
      <h1 className="text-black text-center text-2xl mb-10">Browse Jobs</h1>
      <div className="flex justify-center gap-10 flex-wrap ">
        {data.map((job) => (
          <JobListing
            key={job.id}
            title={job.title}
            type={job.type}
            desc={job.description}
            location={job.location}
            salary={job.salary}
          />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
