import { createContext, useContext, useEffect, useState } from "react";

const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [coordinates, setCoordinates] = useState({
    lat: "",
    lon: "",
  });
  const [weatherDetails, setWeatherDetails] = useState({
    icon: "",
    description: "",
  });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      setCoordinates({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  }, []);
  return (
    <LocationContext.Provider
      value={{ coordinates, setCoordinates, weatherDetails, setWeatherDetails }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocationContext = () => useContext(LocationContext);
