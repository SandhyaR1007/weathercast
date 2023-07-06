import React from "react";
import HighlightCard from "./HighlightCard";

const HighlightsContainer = () => {
  const highlightsData = [
    {
      name: "Wind",
      value: "5.14km/h",
    },
    {
      name: "Humidity",
      value: "80%",
    },
    {
      name: "Feels Like",
      value: "298.59",
    },
    {
      name: "Visibility",
      value: "1000",
    },
    {
      name: "Sunrise",
      value: "1688528742",
    },
    {
      name: "Sunset",
      value: "1688584262",
    },
  ];
  return (
    <div className=" border flex flex-col rounded-3xl shadow-sm px-5 py-2 h-80 custom-blur text-white gap-5">
      <h3 className="text-sm">Today's Highlights</h3>
      <div className="grid grid-cols-3 gap-5">
        {highlightsData.map((data) => (
          <HighlightCard data={data} key={data.name} />
        ))}
      </div>
    </div>
  );
};

export default HighlightsContainer;
