import React, { useEffect, useState } from "react";
import { useParams, useLoaderData } from "react-router-dom";
import { FaMapMarker } from "react-icons/fa";
import BeatLoader  from 'react-spinners/BeatLoader';
const JobPage = (props) => {
  const { id } = useParams();

  const job = useLoaderData();


  return (
    <div className="px-[2em] pt-[8em] grid grid-cols-1 lg:grid-cols-3 gap-10" style={{gridTemplateRows: "200px auto auto"}}>
       
        <div className="p-[2em] row-span-1 col-span-1 lg:col-start-1 lg:col-end-3 bg-white shadow-md" >
        <p className="text-md">{job.type}</p>
        <h1 className="text-lg font-bold pt-[1em]">{job.title}</h1>
        <p className="text-red-500 pt-3  gap-2 flex items-center">
          <FaMapMarker className="text-lg" />
          {job.location}
        </p>
      </div>

      <div className="col-span-1 row-start-2 row-end-3 lg:col-start-1 lg:col-end-3 bg-white shadow-md lg:row-start-2 lg:row-end-3 p-[2em]">
        <p className="font-bold text-black-500 mb-3">Job description</p>
        <p>{job.description}</p>

        <p className="font-bold text-black-500 pt-[2em]">Salary</p>
        <p className="text-violet-500 p-2">{job.salary}/ Year</p>
      </div>
      <div className="p-[2em] col-span-1 row-start-3 row-end-4 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-4 bg-white shadow-md">
        <h2 className="font-semibold text-lg">Company Info</h2>
        <h1 className="font-bold text-xl mt-5">{job.company.name}</h1>
        <p className="my-5">{job.company.description}</p>
        <hr />
        <h2 className="font-bold text-xl my-3">Contact e-mail</h2>
        <p>{job.company.contactEmail}</p>
        <h2 className="font-bold text-xl my-3">Contact phone</h2>
        <p>{job.company.contactPhone}</p>
      </div>

    </div>
  );
};

const JobLoader = async ({ params }) => {
  const response = await fetch(`/api/jobs/${params.id}`);
  const data = await response.json();
  return data;
};
export { JobPage as default, JobLoader };
