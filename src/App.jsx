import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import SearchBar from "./components/SearchBar";
import IpDetail from "./components/IpDetail";
import Map from "./components/Map";
import Context from "./context/AppContext";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false },
    },
  });
  return (
    <QueryClientProvider client={client}>
      <Context>
        <div className="main-wrapper">
          <div className="header"></div>
          <div className="info">
            <h1>IP Address Tracker</h1>
            <SearchBar />
            <IpDetail />
          </div>
          <Map />
        </div>
      </Context>
    </QueryClientProvider>
  );
}

export default App;
