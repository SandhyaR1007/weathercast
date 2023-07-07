import React, { useEffect, useState } from "react";
import { Draggable, Map, Marker, ZoomControl } from "pigeon-maps";
import { useLocationContext } from "../context/LocationContext";
import CustomMarker from "./CustomMarker";
const WeatherMap = () => {
  const { coordinates, setCoordinates } = useLocationContext();

  return (
    <div className="h-100 rounded-md">
      <Map
        height={450}
        defaultCenter={[coordinates?.lat, coordinates?.lon]}
        defaultZoom={2}
        className="rounded-md"
      >
        <ZoomControl />
        <Draggable
          offset={[60, 87]}
          anchor={[coordinates?.lat, coordinates?.lon]}
          onDragEnd={(anchor) =>
            setCoordinates({ lat: anchor[0], lon: anchor[1] })
          }
          defaultCenter={[coordinates?.lat, coordinates?.lon]}
        >
          <Marker
            width={50}
            className="relative"
            anchor={[coordinates?.lat, coordinates?.lon]}
          />
          <CustomMarker />
        </Draggable>
      </Map>
    </div>
  );
};

export default WeatherMap;
