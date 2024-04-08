import React, { useEffect, useState } from "react";
import data from "../../data/jobs.json";
import {Link} from 'react-router-dom'
import JobListing from "./JobListing/JobListing";
import BeatLoader  from 'react-spinners/BeatLoader'
const Jobs = ({isHomePage}) => {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    const apiUrl = isHomePage ? "/api/jobs?_limit=3" : '/api/jobs'
    const fetchJobs = async()=>{
      setLoading(true);
      const response = await fetch(apiUrl);
      const data = await response.json();

      setJobs(data);
      setLoading(false);
    }
    fetchJobs();
  }, [])

  return (
    <div className="flex flex-col w-full px-4">
      <div className={isHomePage ? "flex flex-col items-center  w-full gap-10 flex-wrap" :
      "flex flex-col items-center md:pl-[300px] w-full gap-10 flex-wrap"
    }>
      {!isHomePage && <h1 className="text-3xl font-bold text-center py-5">All jobs</h1>}
        { loading ? <BeatLoader className="p-5"/> : jobs.map((job) => (
          <JobListing
            key={job.id}
            id={job.id}
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
