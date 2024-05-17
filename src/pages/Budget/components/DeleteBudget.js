import React, { useState } from "react";
import Popup from "../../../components/CustomPopup";
import { Button, DialogActions, DialogContent, TextField } from "@mui/material";

const DeleteBudget = ({ open, setOpen, data, deleteBudgetData }) => {
  const [value, setValue] = useState("");
  const [err, setErr] = useState("");
  const handleChange = (e) => {
    const temp = e.target.value;
    setValue(temp);
    if (temp.length === 0) {
      setErr("Please enter value.");
    }
  };

  const handleClose = () => {
    setValue("");
    setErr("");
    setOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "DELETE") {
      const res = deleteBudgetData(data.budget.budgetId);

      res && handleClose();
    } else {
      setErr("Please enter 'DELETE'.");
    }
  };
  return (
    <Popup title={"Delete Budget"} open={open} handleClose={handleClose}>
      <DialogContent style={{ minWidth: "450px" }}>
        <div>
          <div>Month: {data.budget.month}</div>
          <div>Year: {data.budget.year}</div>
        </div>
        <div>Please enter "DELETE" in the textbox to confirm delete.</div>
        <TextField
          required
          // label="Category"
          type="text"
          fullWidth
          variant="standard"
          onChange={handleChange}
          value={value}
          error={err.length > 0}
          helperText={err}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="outlined" size="small">
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          size="small"
          onClick={handleSubmit}
        >
          Delete
        </Button>
      </DialogActions>
    </Popup>
  );
};

export default DeleteBudget;
