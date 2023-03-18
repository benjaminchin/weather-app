import React from "react";
import SearchBar from "./components/SearchBar";
import Weather from "./components/Weather";
import Navbar from "./components/Navbar";
import { DataContextProvider } from "./constants/DataContext";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Box from "@mui/material/Box";
import Item from "./components/Item";

const App = () => {
  return (
    <DataContextProvider>
      <Box sx={{ flexGrow: 1 }} maxHeight="100vh" className="container">
        <Grid display="flex" flexDirection="column" gap="20px">
          <Navbar />
          <SearchBar />
        </Grid>
        <Grid
          container
          // display="flex"
          // justifyContent="center"
          // alignItems="center"
        >
          <Grid
            xs={12}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            rowGap="20px"
            height="80vh"
          >
            <Weather />
          </Grid>
        </Grid>
      </Box>
    </DataContextProvider>
  );
};

export default App;
