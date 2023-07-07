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
  const [isPermission, setIsPermission] = useState(false);
  useEffect(() => {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            setIsPermission(true);
            getLocation();
            setLoading(false);
          } else if (result.state === "prompt") {
            console.log(result.state);
          } else if (result.state === "denied") {
            if (confirm("Please give Location Access")) {
              getLocation();
            } else {
            }
          }
          result.onchange = function () {
            console.log(result.state);
          };
        });
    } else {
      alert("Sorry Not available!");
    }
  }, []);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCoordinates({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
    setIsPermission(true);
  };
  return (
    <LocationContext.Provider
      value={{
        coordinates,
        setCoordinates,
        weatherDetails,
        setWeatherDetails,
        loading,
        setLoading,
        isPermission,
        getLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocationContext = () => useContext(LocationContext);
