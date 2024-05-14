import { Button, DialogActions, DialogContent, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Popup from "../CustomPopup";
import { useCategory } from "../../pages/Profile/hooks/useCategory";

const CreateUpdateCategory = ({ open, setOpen, data }) => {
  const [name, setName] = useState("");
  const [err, setErr] = useState("");
  const { createCategory, editCategory } = useCategory();
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
      data ? editCategory({ name, id: data.id }) : createCategory(name);
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
      <DialogContent style={{minWidth:"450px"}}>
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
          Create
        </Button>
      </DialogActions>
    </Popup>
  );
};

export default CreateUpdateCategory;
