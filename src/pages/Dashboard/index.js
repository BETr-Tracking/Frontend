import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import Crads from "./components/Crads";
import ExpenseChart from "./components/ExpenseChart";
import BudgetUsedSection from "./components/BudgetUsedSection";
import RecentExpenses from "./components/RecentExpenses";

const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={12} lg={6}>
          <Crads />
        </Grid>
        <Grid xs={12} md={12} lg={6}>
          <ExpenseChart />
        </Grid>
        <Grid xs={12} md={12} lg={5}>
          <BudgetUsedSection />
        </Grid>
        <Grid xs={12} md={12} lg={7}>
          <RecentExpenses />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
