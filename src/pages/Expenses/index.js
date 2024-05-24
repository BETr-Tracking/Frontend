import { Box, IconButton } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import React, { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import CreateExpense from "./components/CreateExpense";
import "./css/expenses.css";
import { useExpenses } from "./hooks/useExpenses";

const Expenses = () => {
  const [open, setOpen] = useState(false);
  const {
    expenses,
    createExpenseData,
    singleExpense,
    getSingleExpenseData,
    updateExpenseData,
    deleteExpenseData,
  } = useExpenses();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <input className="search-input" />

          <IconButton onClick={() => setOpen(true)}>
            <AddCircleIcon />
          </IconButton>
          <CreateExpense
            open={open}
            setOpen={setOpen}
            createExpenseData={createExpenseData}
          />
        </Grid>
        <Grid xs={12}>
          <ExpenseList
            expenses={expenses}
            singleExpense={singleExpense}
            getSingleExpenseData={getSingleExpenseData}
            updateExpenseData={updateExpenseData}
            deleteExpenseData={deleteExpenseData}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Expenses;
