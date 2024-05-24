import React, { useState } from "react";
import Popup from "../../../components/CustomPopup";
import { Button, DialogActions, DialogContent, TextField } from "@mui/material";

const DeleteExpense = ({ open, setOpen, data, deleteExpenseData }) => {
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
      const res = deleteExpenseData(data);
      res && handleClose();
    } else {
      setErr("Please enter 'DELETE'.");
    }
  };
  return (
    <Popup title={"Delete Expense"} open={open} handleClose={handleClose}>
      <DialogContent style={{ minWidth: "450px" }}>
        <div>Please enter "DELETE" in the textbox to confirm delete.</div>
        <TextField
          required
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

export default DeleteExpense;
