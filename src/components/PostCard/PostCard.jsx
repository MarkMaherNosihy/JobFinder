import React from "react";

const PostCard = (props) => {
  return (
    <>
      <div className="max-w-[500px] w-full min-h-[150px] bg-slate-900 p-[2em]">
        <h1 className="text-2xl text-white font-bold">{props.title}</h1>
        <p className="text-white font-semibold">
            {props.text}
        </p>
        <button className="bg-white text-black font-bold p-2 mt-4 rounded">{props.button}</button>
      </div>
    </>
  );
};

export default PostCard;
