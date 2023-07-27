import React, { createContext, useState } from "react";

export const AppContext = createContext();

function Context({ children }) {
  const [IpInfo, setIpInfo] = useState(null);
  const [IpAddress, setIpAddress] = useState("");
  const [coordinates, setCoordinates] = useState([]);

  return (
    <AppContext.Provider
      value={{
        IpInfo,
        setIpInfo,
        IpAddress,
        setIpAddress,
        coordinates,
        setCoordinates,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default Context;
