import TextField from "@mui/material/TextField/TextField";
import React, { useContext, useState } from "react";
import { DataContext } from "../constants/DataContext";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const { setData } = useContext(DataContext);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "7323d7aaabmsh799fc2037f4cc2ep1ab606jsne8cda2adc072",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  const fetchData = (evt: { key: string }) => {
    if (evt.key === "Enter") {
      fetch(
        `https://weatherapi-com.p.rapidapi.com/current.json?q=${input}`,
        options
      )
        .then((response) => response.json())
        .then((response) => setData(response))
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="search-box">
      <TextField
        type="text"
        placeholder="Search City or Zip Code..."
        className="search-bar"
        onInput={(e) => setInput((e.target as HTMLInputElement).value)}
        onKeyDown={fetchData}
      />
    </div>
  );
};

export default SearchBar;
