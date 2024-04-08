import React from "react";
import Jobs from "../components/Jobs/Jobs";
import Filter from "../components/Filter/Filter";
const JobsPage = (props) => {
  return (
    <div>
      <div className="flex">
        <Filter />
        <Jobs isHomePage={false}></Jobs>
      </div>
    </div>
  );
};

export default JobsPage;
