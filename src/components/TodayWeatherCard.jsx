import React from "react";
import { GET_ICON } from "../services/apiUrls";

const TodayWeatherCard = ({ weatherData }) => {
  return (
    <div className=" border flex flex-col rounded-3xl shadow-sm p-5 h-80 custom-blur  text-white justify-between">
      <div className="flex flex-col gap-1 relative">
        <h1 className="absolute -top-14">
          <img src={`${GET_ICON}${weatherData?.icon}@4x.png`} alt="" />
        </h1>
        <h1 className="text-4xl mt-28">
          {weatherData?.temp}°<sup className="text-3xl">F</sup>
        </h1>
        <h5>{weatherData?.main}</h5>
        <p>{weatherData?.description}</p>
      </div>

      <div className=" flex flex-col gap-2">
        <hr />
        <p className="text-sm">{weatherData?.place}</p>
        <p className="text-sm">24 July,2023 5:01AM</p>
      </div>
    </div>
  );
};

export default TodayWeatherCard;
