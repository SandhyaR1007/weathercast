import React, { useEffect, useState } from "react";

import { getTodaysWeatherService } from "../services/apiServices";
import {
  ForecastList,
  HighlightsContainer,
  TodayWeatherCard,
  WeatherMap,
} from "../components";
import { useLocationContext } from "../context/LocationContext";

const Home = () => {
  const { coordinates, setWeatherDetails } = useLocationContext();
  const [weatherData, setWeatherData] = useState([]);
  const [highlightsData, setHighlightsData] = useState({});
  useEffect(() => {
    if (coordinates?.lat) {
      getTodaysWeather();
    }
  }, [coordinates]);
  const getTodaysWeather = async () => {
    try {
      const response = await getTodaysWeatherService(
        coordinates?.lat,
        coordinates?.lon
      );
      if (response.status === 200) {
        const data = response.data;
        setWeatherData({
          ...data?.weather[0],
          temp: data?.main?.temp,
          place: data?.name,
        });
        setWeatherDetails({
          icon: data?.weather[0].icon,
          description: data?.weather[0].main,
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
      <div className="col-span-2  rounded-md p-1 h-[450px]">
        <WeatherMap />
      </div>
    </div>
  );
};

export default Home;
