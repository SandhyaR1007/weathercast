import React from "react";
import { GET_ICON } from "../services/apiUrls";
import moment from "moment";
import { convertKelvinToCelsius } from "../utils";

const ForecastCard = ({ data }) => {
  return (
    <div className="p-2 bg-white/10 rounded-lg shadow-sm text-sm flex justify-between items-center gap-2  text-white">
      <span className="flex flex-col w-1/4">
        <span className="text-xs">
          {moment(data?.date).format("ddd, MMM DD")}
        </span>
        <span className="text-xs">{moment(data?.date).format("hh:mmA")}</span>
      </span>
      <div className="w-3/4 flex items-start xs:items-center flex-col xs:flex-row">
        <span className="w-1/2 flex items-center  md:gap-2">
          <img
            className="h-12 w-12"
            src={`${GET_ICON}${data?.icon}@2x.png`}
            alt=""
          />{" "}
          <span>
            {convertKelvinToCelsius(data?.temp)}/
            {convertKelvinToCelsius(data?.feels_like)}°C
          </span>
        </span>
        <span className="w-1/2 text-end text-xs">{data?.main}</span>
      </div>
    </div>
  );
};

export default ForecastCard;
