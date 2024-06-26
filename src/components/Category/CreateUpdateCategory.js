import { Button, DialogActions, DialogContent, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Popup from "../CustomPopup";

const CreateUpdateCategory = ({
  open,
  setOpen,
  data,
  createCategoryData,
  editCategoryData,
}) => {
  const [name, setName] = useState("");
  const [err, setErr] = useState("");
  const handleChange = (e) => {
    const temp = e.target.value;
    setName(temp);
    if (temp.length === 0) {
      setErr("Please enter value.");
    }
  };

  const handleClose = () => {
    setName("");
    setErr("");
    setOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length > 0) {
      data ? editCategoryData({ name, id: data.categoryId }) : createCategoryData(name);
      handleClose();
    } else {
      setErr("Please enter category.");
    }
  };

  useEffect(() => {
    if (data && open) {
      setName(data.name);
    } else {
      setName("");
    }
  }, [data, open]);

  return (
    <Popup
      title={data ? "Edit Category" : "Create Category"}
      open={open}
      handleClose={handleClose}
    >
      <DialogContent style={{ minWidth: "450px" }}>
        <TextField
          required
          label="Category"
          type="text"
          fullWidth
          variant="standard"
          onChange={handleChange}
          value={name}
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
          {data ? "Edit Category" : "Create Category"}
        </Button>
      </DialogActions>
    </Popup>
  );
};

export default CreateUpdateCategory;
