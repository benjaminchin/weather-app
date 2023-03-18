import React, { useState } from "react";

const api = {
  key: "38847c9013a809fc9beecb27eaa46965",
  weather_base: "http://api.openweathermap.org/data/2.5/",
  geo_base: "http://api.openweathermap.org/geo/1.0/direct?",
};

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState("");

  const search = (evt: { key: string }) => {
    let lati: number = 0;
    let long: number = 0;
    if (evt.key === "Enter") {
      // setLocation(query);

      fetch(`${api.geo_base}q=${query}&limit=5&appid=${api.key}`)
        .then((geo_res) => geo_res.json())
        .then((geo_result) => {
          // console.log(result);
          // console.log(result[0]["lat"]);
          lati = geo_result[0]["lat"];
          long = geo_result[0]["long"];
          setLocation(
            geo_result[0]["name"] +
              geo_result[0]["country"] +
              geo_result[0]["state"]
          );
        });

      fetch(
        `${api.weather_base}weather?lat=${lati}&lon=${long}&appid=${api.key}`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(weather);
        });
    }
  };

  const date = new Date();

  return (
    <div className="app">
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyDown={search}
        />
      </div>
      <div className="hero">
        <h1 className="location">{location}</h1>
        <h2 className="date">{date.toString()}</h2>
        <p className="weather">{}</p>
      </div>
    </div>
  );
};

export default App;
