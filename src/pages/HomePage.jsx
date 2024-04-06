import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import PostCard from "../components/PostCard/PostCard";
import Jobs from "../components/Jobs/Jobs";
import { Link } from "react-router-dom";
const HomePage = (props) => {
  return (
    <div className="relative">
      <Hero />
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 py-10">
        <PostCard
          title="For developers"
          text="Browse our developers jobs now!"
          button="Browse Jobs"
        />
        <PostCard
          title="For Employers"
          text="List your jobs for professional developers now!"
          button="Add a Job"
        />
      </div>
      <div className="p-6 flex flex-col items-center">
        <h1 className="text-black text-center text-2xl mb-10">Browse Jobs</h1>
        <Jobs isHomePage={true} />
        <Link
          className="w-[300px] p-3 bg-black text-white text-2xl text-center mt-5"
          to="/jobs"
        >
          View all jobs
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
