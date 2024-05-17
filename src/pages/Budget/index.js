import { Box, IconButton } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import React, { useState } from "react";
import FilterList from "./components/FilterList";
import AllBudgets from "./components/AllBudgets";
import CreateBudget from "./components/CreateBudget";
import { useBudget } from "./hooks/useBudget";

const Budget = () => {
  const [open, setOpen] = useState(false);
  const { budgets, deleteBudgetData, updateBudgetData, createBudgetData } =
    useBudget();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <input className="search-input" />

          <IconButton onClick={() => setOpen(true)}>
            <AddCircleIcon />
          </IconButton>
          <CreateBudget
            open={open}
            setOpen={setOpen}
            createBudgetData={createBudgetData}
          />
        </Grid>
        {/* <Grid xs={12}>
          <FilterList filter={filter} setFilter={setFilter} />
        </Grid> */}
        <Grid xs={12}>
          <AllBudgets
            data={budgets}
            updateBudgetData={updateBudgetData}
            deleteBudgetData={deleteBudgetData}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Budget;
