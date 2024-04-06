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
    <div className="flex flex-col items-center">
      <div className="flex justify-center gap-10 flex-wrap ">
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
