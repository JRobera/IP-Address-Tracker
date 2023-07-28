import React, { useContext, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import "./Map.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import MarkerComp from "./MarkerComp";

function Map() {
  const { setIpInfo, IpAddress, coordinates, setCoordinates } =
    useContext(AppContext);
  const { data, isLoading } = useQuery(["ip_Address"], () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    return axios
      .get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${IpAddress}`
      )
      .then((response) => {
        setIpInfo(response.data);
        setCoordinates([
          response.data?.location?.lat,
          response.data?.location?.lng,
        ]);
        return response.data;
      });
  });

  return (
    <div id="map" className="map">
      {coordinates.length > 0 && (
        <MapContainer center={coordinates} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MarkerComp />
        </MapContainer>
      )}
    </div>
  );
}

export default Map;
