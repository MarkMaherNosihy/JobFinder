import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="absolute flex w-full justify-between py-6 px-[6em] z-50 bg-slate-950">
      <h1 className="text-white">LOGO</h1>
      <div>
        <ul className="flex gap-5 text-white">
          <li>
            <NavLink
              className={({ isActive }) => {
                return isActive
                  ? "bg-zinc-600 hover:bg-zinc-500 p-2 border-2 border-indigo-500/50"
                  : "bg-zinc-600 hover:bg-zinc-500 p-2 border-2 border-transparent";
              }}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => {
                return isActive
                  ? "bg-zinc-600 hover:bg-zinc-500 p-2 border-2 border-indigo-500/50"
                  : "bg-zinc-600 hover:bg-zinc-500 p-2 border-2  border-transparent";
              }}
              to="/jobs"
            >
              Job listings
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => {
                return isActive
                  ? "bg-zinc-600 hover:bg-zinc-500 p-2 border-2  border-indigo-500/50"
                  : "bg-zinc-600 hover:bg-zinc-500 p-2 border-2  border-transparent";
              }}
              to="/add-job"
            >
              Post a job
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
