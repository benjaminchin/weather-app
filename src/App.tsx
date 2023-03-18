import React from "react";
import SearchBar from "./components/SearchBar";
import Weather from "./components/Weather";
import { DataContextProvider } from "./constants/DataContext";

const App = () => {
  return (
    <DataContextProvider>
      <div className="app">
        <div className="content">
          <SearchBar />
          <Weather />
        </div>
      </div>
    </DataContextProvider>
  );
};

export default App;
