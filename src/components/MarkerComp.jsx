import React, { useEffect, useContext } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import { AppContext } from "../context/AppContext";

function MarkerComp() {
  const { coordinates } = useContext(AppContext);
  const map = useMap();

  useEffect(() => {
    map.flyTo(
      coordinates,
      15,
      {
        animate: true,
      },
      [map, coordinates]
    );
  });
  return (
    <>
      <Marker position={coordinates}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </>
  );
}

export default MarkerComp;
