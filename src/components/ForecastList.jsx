import React, { useEffect, useState } from "react";
import { getFiveDaysForecastService } from "../services/apiServices";
import { GET_ICON } from "../services/apiUrls";
import moment from "moment/moment";

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
      <h1 className="text-lg text-white mb-2">5 Days Forecast</h1>
      <div className="max-h-[500px] overflow-y-scroll p-1 flex flex-col gap-2">
        {forecastData?.map((data) => (
          <div className="p-2 bg-white/10 rounded-lg shadow-sm text-sm flex justify-between items-center gap-2  text-white">
            <span className="flex flex-col w-1/4">
              <span>{moment(data?.date).format("ddd, MMM DD")}</span>
              <span>{moment(data?.date).format("hh:mmA")}</span>
            </span>
            <span className="w-1/2 flex items-center  gap-2">
              <img
                className="h-12 w-12"
                src={`${GET_ICON}${data?.icon}@2x.png`}
                alt=""
              />{" "}
              <span>
                {data?.temp}/{data?.feels_like}
              </span>
            </span>
            <span className="w-1/4 flex justify-end">{data?.main}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastList;
