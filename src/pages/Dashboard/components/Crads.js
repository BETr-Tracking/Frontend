import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import CardComponent from "../../../components/CardComponent";

const Crads = ({ data }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <CardComponent>
            <div style={{ fontSize: "16px", fontWeight: "bold" }}>
              Total Amount
            </div>
            <div style={{ fontSize: "32px", color: "#888" }}>
              {data && data.totalAmt ? data.totalAmt : "-"}
            </div>
          </CardComponent>
        </Grid>
        <Grid xs={12}>
          <CardComponent>
            <div style={{ fontSize: "16px", fontWeight: "bold" }}>
              Total Spent
            </div>
            <div style={{ fontSize: "32px", color: "#888" }}>
              {data && data.totalSpent ? data.totalSpent : "-"}
            </div>
          </CardComponent>
        </Grid>
        {/* <Grid xs={12} md={6}>
          card3
        </Grid>
        <Grid xs={12} md={6}>
          card4
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default Crads;
