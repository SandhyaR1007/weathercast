import React from "react";
import { useLocationContext } from "../context/LocationContext";
import { GET_ICON } from "../services/apiUrls";

const CustomMarker = () => {
  const { weatherDetails } = useLocationContext();
  return (
    <div className="h-16 w-16 p-2 border rounded-md z-30 absolute bg-sky-200 flex flex-col gap-1 items-center">
      <img
        className="h-7 w-7"
        src={`${GET_ICON}${weatherDetails?.icon}.png`}
        alt=""
      />
      <span className="text-xs font-semibold ">
        {weatherDetails?.description}
      </span>
    </div>
  );
};

export default CustomMarker;
