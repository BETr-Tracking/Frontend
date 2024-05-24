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

const CreateExpense = ({ open, setOpen, createExpenseData }) => {
  const initialState = {
    desc: "",
    cid: null,
    date: null,
    amount: null,
  };
  const [data, setData] = useState(initialState);
  const { categories } = useCategory();

  const handleChange = (e) => {
    const t = e.target;
    setData((prev) => {
      return {
        ...prev,
        [t.name]: t.name === "amount" ? Number(t.value) : t.value,
      };
    });
  };

  const handleClose = () => {
    setData(initialState);
    setOpen(false);
  };

  const handleSubmit = () => {
    const res = createExpenseData(data);
    res && handleClose();
  };
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
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date"
              slotProps={{ textField: { fullWidth: true } }}
              value={data.date}
              onChange={(newValue) =>
                setData((prev) => {
                  return { ...prev, date: newValue };
                })
              }
            />
          </LocalizationProvider>

          <TextField
            label="Description"
            name="desc"
            multiline
            maxRows={4}
            fullWidth
            onChange={handleChange}
            value={data.desc}
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
            <InputLabel id="create-expense-select">Category</InputLabel>
            <Select
              value={data.cid}
              labelId="create-expense-select"
              name="cid"
              onChange={handleChange}
            >
              {categories.map((item, i) => (
                <MenuItem key={i} value={item.categoryId}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
