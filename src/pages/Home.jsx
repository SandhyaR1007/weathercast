import React, { useEffect, useState } from "react";

import { getTodaysWeatherService } from "../services/apiServices";
import {
  ForecastList,
  HighlightsContainer,
  TodayWeatherCard,
} from "../components";

const Home = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [highlightsData, setHighlightsData] = useState({});
  useEffect(() => {
    getTodaysWeather();
  }, []);
  const getTodaysWeather = async () => {
    try {
      const response = await getTodaysWeatherService(41.34, 10.99);
      if (response.status === 200) {
        const data = response.data;
        setWeatherData({
          ...data?.weather[0],
          temp: data?.main?.temp,
          place: data?.name,
        });
        setHighlightsData({
          ...data?.main,
          ...data?.wind,
          ...data?.sys,
          visibility: data?.visibility,
        });
      }
    } catch (err) {
      console.log({ err });
    }
  };
  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="col-span-1 ">
        <TodayWeatherCard weatherData={weatherData} />
      </div>
      <div className="col-span-2 ">
        <HighlightsContainer highlightsData={highlightsData} />
      </div>
      <div className="col-span-1 ">
        <ForecastList />
      </div>
      <div className="col-span-2 border">Map</div>
    </div>
  );
};

export default Home;
