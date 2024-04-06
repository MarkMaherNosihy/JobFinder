import React from "react"

const Header = (props) => {
  return (
    <div className="absolute flex w-full justify-between py-6 px-[6em] z-50">
      <h1 className="text-white">LOGO</h1>
      <div>
        <ul className="flex gap-5 text-white">
            <li>Home</li>
            <li>Available jobs</li>
            <li>Post a job</li>
        </ul>
      </div>
    </div>
  )
};

export default Header;
