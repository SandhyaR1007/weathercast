import React, { useEffect, useState } from "react";
import { Draggable, Map, Marker, ZoomControl } from "pigeon-maps";
import { useLocationContext } from "../context/LocationContext";
import CustomMarker from "./CustomMarker";
const WeatherMap = () => {
  const { coordinates, setCoordinates } = useLocationContext();

  const [anchor, setAnchor] = useState([coordinates?.lat, coordinates?.lon]);
  useEffect(() => {
    let id = setTimeout(() => {
      setCoordinates({ lat: anchor[0], lon: anchor[1] });
    }, 300);
    return () => {
      clearTimeout(id);
    };
  }, [anchor]);
  return (
    <div className="h-100 rounded-md">
      <Map
        height={450}
        defaultCenter={[coordinates?.lat, coordinates?.lon]}
        defaultZoom={4}
        className="rounded-md"
      >
        <ZoomControl />
        <Draggable
          offset={[60, 87]}
          anchor={anchor}
          onDragEnd={(e) => setAnchor(e)}
          defaultCenter={[coordinates?.lat, coordinates?.lon]}
        >
          <Marker width={50} className="relative" anchor={anchor} />
          <CustomMarker />
        </Draggable>
      </Map>
    </div>
  );
};

export default WeatherMap;
