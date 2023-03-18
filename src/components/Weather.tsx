import Typography from "@mui/material/Typography/Typography";
import React, { useContext } from "react";
import { DataContext } from "../constants/DataContext";
import default_data from "../constants/data";

const Weather = () => {
  const { data } = useContext(DataContext);
  console.log(data);
  return (
    <div className="weather">
      {(data != default_data) && <Typography variant="h2">{`${data.location.name}, ${data.location.region} - ${data.location.country}`}</Typography>}
      <h2>It is currently {`${data.current.temp_f} degrees fahrenheit`}</h2>
    </div>
  );
};

export default Weather;
