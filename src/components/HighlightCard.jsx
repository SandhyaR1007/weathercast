import React from "react";

const HighlightCard = ({ data }) => {
  return (
    <div className="flex flex-col col-span-1 rounded-lg py-5 px-6 bg-white/10 shadow-md ">
      <h1 className="sm:text-xl">{data.name}</h1>
      <h4>{data.value}</h4>
    </div>
  );
};

export default HighlightCard;
