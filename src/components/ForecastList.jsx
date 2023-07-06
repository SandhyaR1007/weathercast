import React, { useEffect, useState } from "react";
import { getFiveDaysForecastService } from "../services/apiServices";

import ForecastCard from "./ForecastCard";

const ForecastList = () => {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    getForecast();
  }, []);
  const getForecast = async () => {
    try {
      const response = await getFiveDaysForecastService(41.34, 10.99);
      if (response.status === 200) {
        const details = response?.data?.list?.map((data) => ({
          date: data?.dt_txt,
          ...{ ...data?.weather[0] },
          feels_like: data?.main?.feels_like,
          temp: data?.main?.temp,
        }));
        console.log(details);
        setForecastData(details);
      }
    } catch (err) {
      console.log({ err });
    }
  };
  return (
    <div className="custom-blur p-1">
      <h1 className="text-lg text-white mb-2 p-1">5 Days Forecast</h1>
      <div className="max-h-[400px] overflow-y-scroll p-1 flex flex-col gap-2">
        {forecastData?.map((data, index) => (
          <ForecastCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ForecastList;
