import React, { useState } from "react";
import { useBudget } from "../hooks/useBudget";
import { useCategory } from "../../Profile/hooks/useCategory";
import Popup from "../../../components/CustomPopup";
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import CategoryAmountSection, {
  CategoryListTable,
} from "./CategoryAmountSection";

const CreateBudget = ({ open, setOpen, createBudgetData }) => {
  const initialState = {
    month: null,
    year: null,
    catamtlist: [],
  };
  const categoryInitial = { cid: null, amt: 0 };
  const [data, setData] = useState(initialState);
  const [newData, setNewData] = useState(categoryInitial);
  const { categories } = useCategory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: Number(value) };
    });
  };

  const handleCategory = (name, value, type) => {
    switch (type) {
      case 1:
        break;

      case 2:
        break;

      default:
        break;
    }
  };

  const handlNewCategory = (name, value) => {
    switch (name) {
      case "category":
        setNewData((prev) => {
          return { ...prev, cid: value };
        });
        break;
      case "amount":
        setNewData((prev) => {
          return { ...prev, amt: Number(value) };
        });
        break;
      default:
        break;
    }
  };

  const addCategory = () => {
    setData((prev) => {
      return {
        ...prev,
        catamtlist: [...data.catamtlist, newData],
      };
    });
    setNewData(categoryInitial);
  };

  const deleteCategoryList = (cid) => {
    setData((prev) => {
      return {
        ...prev,
        catamtlist: data.catamtlist.filter((item) => item.cid !== cid),
      };
    });
  };

  const handleClose = () => {
    setOpen(false);
    setData(initialState);
    setNewData(categoryInitial);
  };

  const handleSubmit = () => {
    const res =createBudgetData(data);
    res && handleClose()
  };
  return (
    <Popup title={"Create Budget"} open={open} handleClose={handleClose}>
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
            fullWidth
            name="month"
            label="Month"
            placeholder="Enter Month"
            type="number"
            value={data.month}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            name="year"
            label="Year"
            placeholder="Enter Year"
            type="number"
            value={data.year}
            onChange={handleChange}
          />
          {/* category list and amount */}
          {/* {data.catamtlist.map((item) => (
            <CategoryAmountSection
              data={item}
              handleChange={handleCategory}
              categories={categories}
            />
          ))} */}
          {data.catamtlist.length > 0 ? (
            <CategoryListTable
              data={data.catamtlist}
              deleteCategoryList={deleteCategoryList}
              categories={categories}
            />
          ) : (
            <></>
          )}
          {/* new category and textbox */}
          <hr />
          <div>
            <FormControl fullWidth>
              <Select
                name="category"
                value={newData.cid}
                onChange={(e) =>
                  handlNewCategory(e.target.name, e.target.value)
                }
              >
                {categories.map((item) => (
                  <MenuItem value={item.categoryId}>{item.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              type="number"
              fullWidth
              name="amount"
              label="Amount"
              placeholder="Enter Amount"
              value={newData.amt}
              onChange={(e) => handlNewCategory(e.target.name, e.target.value)}
            />
            <Button
              onClick={addCategory}
              style={{ float: "right" }}
              variant="contained"
              size="small"
            >
              Add Category
            </Button>
          </div>
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

export default CreateBudget;
