import React from "react";
import { useParams, useLoaderData } from "react-router-dom";
import { FaMapMarker } from "react-icons/fa";
const JobPage = (props) => {
  const { id } = useParams();
  const job = useLoaderData();
  return (
    <div className="px-[2em] pt-[8em] grid grid-cols-1 grid-rows-3 md:grid-cols-12 md:grid-rows-3 h-[100vh] gap-10">
      <div className="p-[2em] col-span-1 md:col-start-1 md:col-end-8 bg-white shadow-md">
        <p className="text-md">{job.type}</p>
        <h1 className="text-lg font-bold pt-[1em]">{job.title}</h1>
        <p className="text-red-500 p-2 gap-2 flex items-center">
          <FaMapMarker className="text-lg" />
          {job.location}
        </p>
      </div>
      <div className="col-span-1 md:col-start-9 md:col-end-13 md:row-start-1 md:row-end-4 bg-white shadow-md"></div>
      <div className=" col-span-1 md:col-start-1 md:col-end-8 bg-white shadow-md md:row-start-2 md:row-end-4"></div>
    </div>
  );
};

const JobLoader = async ({ params }) => {
  const response = await fetch(`/api/jobs/${params.id}`);
  const data = await response.json();
  return data;
};
export { JobPage as default, JobLoader };
