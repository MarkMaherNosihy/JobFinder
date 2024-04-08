import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu, AiFillHome } from "react-icons/ai";
import { BsClipboard } from "react-icons/bs";
import { RiAddBoxFill } from "react-icons/ri";

const Header = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuChange = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenuOnNavigate = () =>{
    setIsMenuOpen(false);
  }
  return (
    <div className="absolute flex w-full justify-between py-6 px-[2em] md:px-[4em] h-[75px] z-50 bg-slate-950">
      <h1 className="text-white">LOGO</h1>
      <div>
        <ul className="hidden md:flex gap-5 text-white">
          <li>
            <NavLink
              className={({ isActive }) => {
                return isActive
                  ? "hover:bg-zinc-500 p-2  border-2 border-indigo-500/50"
                  : "hover:bg-zinc-500 p-2 border-2 border-transparent";
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
                  ? "hover:bg-zinc-500 p-2 border-2 border-indigo-500/50"
                  : "hover:bg-zinc-500 p-2 border-2  border-transparent";
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
                  ? "hover:bg-zinc-500 p-2 border-2  border-indigo-500/50"
                  : "hover:bg-zinc-500 p-2 border-2  border-transparent";
              }}
              to="/add-job"
            >
              Post a job
            </NavLink>
          </li>
        </ul>
        {/* Mobile */}
        <div
          className="md:hidden cursor-pointer z-50"
          onClick={handleMenuChange}
        >
          {isMenuOpen ? (
            <AiOutlineClose className="fixed right-5" size={30} color="black" />
          ) : (
            <AiOutlineMenu size={30} color="white" />
          )}
        </div>

        <div
          className={
            isMenuOpen
              ? "fixed md:hidden right-0 top-0 h-full w-[60%] bg-white ease-in-out duration-500 shadow-md border z-[-1]"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 right-[-100%]"
          }
        >
          <ul className="px-[3em] py-[4em]">
            <li>
              <NavLink
                className="flex items-center gap-2 py-[1em] font-semibold border-b-2"
                to="/"
                onClick={closeMenuOnNavigate}
              >
                <AiFillHome size={25} />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex items-center gap-2 py-[1em] font-semibold border-b-2"
                to="/jobs"
                onClick={closeMenuOnNavigate}
              >
                <BsClipboard size={25} />
                Job Listing
              </NavLink>
            </li>{" "}
            <li>
              <NavLink
                className="flex items-center gap-2 py-[1em] font-semibold border-b-2"
                to="/add-job"
                onClick={closeMenuOnNavigate}
              >
                <RiAddBoxFill size={25} />
                Add a Job
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
