import React, { useEffect, useState } from "react";
import { useExpenses } from "../hooks/useExpenses";
import { useCategory } from "../../Profile/hooks/useCategory";
import Popup from "../../../components/CustomPopup";
import { Button, DialogActions, DialogContent, TextField } from "@mui/material";

const EditExpense = ({ open, setOpen, id }) => {
  const initialState = {
    title: "",
    description: "",
    cid: null,
    date: null,
    amount: null,
  };
  const [data, setData] = useState(initialState);
  const { singleExpense, getSingleExpense, updateExpense } = useExpenses();
  const { categories } = useCategory();

  const handleChange = (e) => {
    const t = e.target;
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {};

  useEffect(() => {
    if (open && id) {
      getSingleExpense(id);
    }
  }, [open, id]);

  useEffect(() => {
    if (singleExpense) {
      setData(singleExpense);
    }
  }, [singleExpense]);

  return (
    <Popup title={"Update Expense"} open={open} handleClose={handleClose}>
      <DialogContent style={{ minWidth: "450px" }}>
        <TextField
          label="Title"
          name="title"
          type="text"
          fullWidth
          variant="standard"
          onChange={handleChange}
          value={data.title}
        />
        <TextField
          label="Amount"
          name="amount"
          type="number"
          fullWidth
          variant="standard"
          onChange={handleChange}
          value={data.amount}
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
          Update
        </Button>
      </DialogActions>
    </Popup>
  );
};

export default EditExpense;
