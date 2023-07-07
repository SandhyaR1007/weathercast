import React from "react";
import HighlightCard from "./HighlightCard";
import moment from "moment";

const HighlightsContainer = ({ highlightsData }) => {
  const data = [
    {
      name: "Wind",
      value: `${highlightsData?.speed}km/h`,
    },
    {
      name: "Humidity",
      value: `${highlightsData?.humidity}%`,
    },
    {
      name: "Feels Like",
      value: `${highlightsData?.feels_like}`,
    },
    {
      name: "Visibility",
      value: `${Number(highlightsData?.visibility) / 100}km`,
    },
    {
      name: "Sunrise",
      value: `${moment(highlightsData?.sunrise).format("LT")}`,
    },
    {
      name: "Sunset",
      value: `${moment(highlightsData?.sunset).format("LT")}`,
    },
  ];
  return (
    <div className=" border flex flex-col rounded-3xl shadow-sm px-5 py-2 md:h-80  text-white gap-5  bg-black/50 border-none">
      <h3 className="text-lg mb-2">Today's Highlights</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {data?.map((value) => (
          <HighlightCard data={value} key={value.name} />
        ))}
      </div>
    </div>
  );
};

export default HighlightsContainer;
