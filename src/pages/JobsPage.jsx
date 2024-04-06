import React from "react"
import Jobs from "../components/Jobs/Jobs";
const JobsPage = (props) => {
  return (
    <div className="pt-[7em]">
        <h1 className="text-3xl font-bold text-center py-5">All jobs</h1>
      <Jobs isHomePage={false}></Jobs>
    </div>
  )
};

export default JobsPage;
