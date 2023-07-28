import React, { useContext, useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import "./SearchBar.css";
import { AppContext } from "../context/AppContext";
import axios from "axios";

function SearchBar() {
  const { setIpInfo, IpAddress, setIpAddress, setCoordinates } =
    useContext(AppContext);
  function handleChange(e) {
    const { value } = e.target;
    setIpAddress(value);
  }
  function handleSubmit(e) {
    e.preventDefault();

    const apiKey = import.meta.env.VITE_API_KEY;
    axios
      .get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${IpAddress}`
      )
      .then((response) => {
        setIpInfo(response.data);
        setCoordinates([
          response.data?.location?.lat,
          response.data?.location?.lng,
        ]);
        setIpAddress("");
      })
      .catch((error) => {
        alert(error);
      });
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={IpAddress}
        onChange={handleChange}
        minLength={7}
        maxLength={15}
        placeholder="Search for any IP address or domain"
      />
      <button type="submit">
        <BiChevronRight size={20} />
      </button>
    </form>
  );
}

export default SearchBar;
