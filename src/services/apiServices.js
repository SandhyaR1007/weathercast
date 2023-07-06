import axios from "axios";
import { GET_FIVE_DAY_FORECAST, TODAY_WEATHER } from "./apiUrls";

export const getTodaysWeatherService = async (lat, lon) => {
  const config = {
    params: {
      lat,
      lon,
      appid: import.meta.env.VITE_REACT_APP_OPEN_WEATHER_KEY,
    },
  };
  return axios.get(TODAY_WEATHER, config);
};
export const getFiveDaysForecastService = async (lat, lon) => {
  const config = {
    params: {
      lat,
      lon,
      appid: import.meta.env.VITE_REACT_APP_OPEN_WEATHER_KEY,
    },
  };
  return axios.get(GET_FIVE_DAY_FORECAST, config);
};
