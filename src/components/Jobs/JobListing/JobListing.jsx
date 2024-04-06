import React from "react";

const JobListing = (props) => {
  return (
    <div className="flex flex-col p-5 bg-gray min-w-[300px] max-w-[500px] min-h-[250px] shadow-lg bg-white">
      <p>{props.type}</p>
      <h1 className="text-black font-bold p-2">{props.title}</h1>
      <p className="p-3">
      {props.desc}
      </p>
      <p className="text-violet-500 p-2">{props.salary}/ Year</p>
      <hr />
      <p className="text-red-500 p-2">{props.location}</p>
      <button className="w-full p-2 bg-cyan-300 text-white rounded">Apply</button>
    </div>
  );
};

export default JobListing;
