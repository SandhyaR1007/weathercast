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
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            navigator.geolocation.getCurrentPosition(function (position) {
              console.log("Latitude is :", position.coords.latitude);
              console.log("Longitude is :", position.coords.longitude);
              setCoordinates({
                lat: position.coords.latitude,
                lon: position.coords.longitude,
              });
            });
            setLoading(false);
          } else if (result.state === "prompt") {
            console.log(result.state);
          } else if (result.state === "denied") {
            alert("Please give location permissions");
          }
          result.onchange = function () {
            console.log(result.state);
          };
        });
    } else {
      alert("Sorry Not available!");
    }
  }, []);
  return (
    <LocationContext.Provider
      value={{
        coordinates,
        setCoordinates,
        weatherDetails,
        setWeatherDetails,
        loading,
        setLoading,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocationContext = () => useContext(LocationContext);
