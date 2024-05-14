import { Box, IconButton } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import React from "react";

const Expenses = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <input />

          <IconButton>
            <AddCircleIcon />
          </IconButton>
        </Grid>
        <Grid xs={12}>expenses list</Grid>
      </Grid>
    </Box>
  );
};

export default Expenses;
