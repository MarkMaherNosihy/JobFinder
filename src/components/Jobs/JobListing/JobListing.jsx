import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";
const JobListing = (props) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <div className="flex flex-col p-5 bg-gray w-full max-w-[960px] min-h-[250px] shadow-lg bg-white">
      <p>{props.type}</p>
      <h1 className="text-black font-bold p-2">{props.title}</h1>
      <p className="p-3">
        {showFullDescription ? props.desc : (props.desc.length >= 150 ? props.desc.slice(0, 150)+"... " : props.desc)}
        <button
          className="text-cyan-500"
          onClick={() => setShowFullDescription(!showFullDescription)}
        >
          {props.desc.length >= 150 && (showFullDescription ? "View less" : "Read more")}
        </button>
      </p>
      <p className="text-violet-500 p-2">{props.salary}/ Year</p>
      <hr />
      <p className="text-red-500 p-2 gap-2 flex items-center">
        <FaMapMarker className="text-lg" />
        {props.location}{" "}
      </p>
      <Link to={`/jobs/${props.id}`} className="w-full text-center text-md w-[50%] mx-auto font-bold p-2 bg-cyan-300 text-white rounded">
        Apply
      </Link>
    </div>
  );
};

export default JobListing;
