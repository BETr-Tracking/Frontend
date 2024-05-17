import React, { useState } from "react";
import { useExpenses } from "../hooks/useExpenses";
import Popup from "../../../components/CustomPopup";
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useCategory } from "../../Profile/hooks/useCategory";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const CreateExpense = ({ open, setOpen }) => {
  const initialState = {
    title: "",
    description: "",
    cid: null,
    date: null,
    amount: null,
  };
  const [data, setData] = useState(initialState);
  const { createExpense } = useExpenses();
  const { categories } = useCategory();

  const handleChange = (e) => {
    const t = e.target;
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {};
  return (
    <Popup title={"Create Expense"} open={open} handleClose={handleClose}>
      <DialogContent style={{ minWidth: "450px" }}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": {
              m: 1,
              maxWidth: "100%",
              marginLeft: "0",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Title"
            name="title"
            type="text"
            fullWidth
            onChange={handleChange}
            value={data.title}
          />
          <TextField
            label="Description"
            name="description"
            multiline
            maxRows={4}
            fullWidth
            onChange={handleChange}
            value={data.description}
          />
          <TextField
            label="Amount"
            name="amount"
            type="number"
            fullWidth
            onChange={handleChange}
            value={data.amount}
          />
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select value={data.cid} label="Category" onChange={handleChange}>
              {categories.map((item, i) => (
                <MenuItem key={i} value={item.categoryId}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DatePicker
              value={data.date}
              onChange={(newValue) =>
                setData((prev) => {
                  return { ...prev, date: newValue };
                })
              }
            />
          </LocalizationProvider>
        </Box>
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
          Create
        </Button>
      </DialogActions>
    </Popup>
  );
};

export default CreateExpense;
