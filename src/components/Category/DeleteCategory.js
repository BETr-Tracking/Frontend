import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import Popup from "../CustomPopup";
import { useCategory } from "../../pages/Profile/hooks/useCategory";

const DeleteCategory = ({ open, setOpen, data }) => {
  const [value, setValue] = useState("");
  const [err, setErr] = useState("");
  const { deleteCategory } = useCategory();
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
    if (value === data.name) {
      const res = deleteCategory(data);
      if (res) {
        // refresh data
      }
      handleClose();
    } else {
      setErr("Please enter correct category.");
    }
  };
  return (
    <Popup title={"Delete Category"} open={open} handleClose={handleClose}>
      <DialogContent style={{minWidth:"450px"}}>
        <DialogContentText>
          Make sure to move the expenses under the category to other category
          before deleting the category.
        </DialogContentText>
        <div>Please enter "{data.name}"" in the textbox to confirm delete.</div>
        <TextField
          required
          label="Category"
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

export default DeleteCategory;
