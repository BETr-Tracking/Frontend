import { Box, IconButton } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import React, { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import CreateExpense from "./components/CreateExpense";
import "./css/expenses.css"

const Expenses = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <input className="search-input"/>

          <IconButton onClick={() => setOpen(true)}>
            <AddCircleIcon />
          </IconButton>
          <CreateExpense open={open} setOpen={setOpen} />
        </Grid>
        <Grid xs={12}>
          <ExpenseList />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Expenses;
