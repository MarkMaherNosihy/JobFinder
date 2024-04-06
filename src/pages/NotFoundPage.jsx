import React from "react"
import {Link} from "react-router-dom"
const NotFoundPage = (props) => {
  return (
    <div className="flex flex-col justify-center items-center pt-[72px]">
        <h1 className="text-5xl text-rose-500 text-bold p-10">Ooops! Looks like this page is not available...</h1>
        <Link className="px-4 py-2 bg-black text-white rounded" to="/">Go back</Link>
    </div>
  )
};

export default NotFoundPage;
