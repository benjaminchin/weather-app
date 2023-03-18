import Typography from "@mui/material/Typography/Typography";
import React, { useContext } from "react";
import { DataContext } from "../constants/DataContext";
import default_data from "../constants/data";
import Item from "./Item";

const Weather = () => {
  const { data } = useContext(DataContext);
  console.log(data);
  return (
    <div className="weather">
      {data != default_data && (
        <Item>
          <Typography
            fontWeight={700}
            fontSize="24px"
          >{`${data.location.name}, ${data.location.region} - ${data.location.country}`}</Typography>
          <Typography fontWeight={600} fontSize="20px">{`${data.current.temp_f} °F`}</Typography>
          <Typography>Real feel: {`${data.current.feelslike_f} °F`}</Typography>
          {`${data.current.condition.text}`}<br/>
          {`Wind Speeds: ${data.current.wind_mph} MPH`}
        </Item>
      )}
    </div>
  );
};

export default Weather;
