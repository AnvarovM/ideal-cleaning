import React, { useState } from "react";

// map-box package
import ReactMapGL, { Marker, Popup } from "react-map-gl";


function Map({ searchResult }) {
  const [viewport, setViewPort] = useState({
    width: "100%",
    height: "100%",
    latitude: 40.114487,
    longitude: 67.825455,
    zoom: 16,
  });

  return (
    <div className="h-[300px] md:h-[500px] lg:h-[500px] w-[290px] md:w-[400px] lg:w-[600px] "> 
        <ReactMapGL
      mapStyle="mapbox://styles/akzmsh/ckwj9wmxu0gx314o5p2uuw67x"
      mapboxApiAccessToken="pk.eyJ1IjoiYWt6bXNoIiwiYSI6ImNrdzJkYnR3bTBlYXoycHA2dm1neDdmYWsifQ.phcUwNaXLFaOJNbIlpyeJg"
      {...viewport}
      onViewportChange={(nextViewport) => setViewPort(nextViewport)}
    >
        <Marker
            longitude={67.825455}
            latitude={40.114487}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <img
              aria-label="push-pin"
              role="img"
              className="w-10 cursor-pointer animate-bounce"
              src="/static/img/location-pin.png"
              alt=""
            />
          </Marker>
    </ReactMapGL>
    </div>
  );
}

export default Map;
