import React, { useEffect, useState } from "react";
import TodayWeatherCard from "../components/TodayWeatherCard";
import HighlightsContainer from "../components/HighlightsContainer";
import { getTodaysWeatherService } from "../services/apiServices";

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
          visiblity: data?.visiblity,
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
      <div className="col-span-2 border">
        <HighlightsContainer highlightsData={highlightsData} />
      </div>
      <div className="col-span-1 border">History</div>
      <div className="col-span-2 border">Map</div>
    </div>
  );
};

export default Home;
