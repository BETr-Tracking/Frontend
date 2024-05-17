import React, { useEffect, useState } from "react";
import { useBudget } from "../hooks/useBudget";
import { useCategory } from "../../Profile/hooks/useCategory";
import Popup from "../../../components/CustomPopup";
import { Button, DialogActions, DialogContent } from "@mui/material";

const EditBudget = ({ open, setOpen, id, updateBudgetData }) => {
  const initialState = {
    month: null,
    year: null,
    categories: [],
  };
  const [data, setData] = useState(initialState);
  const { singleBudget, getSingleBudget } = useBudget();
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
      getSingleBudget(id);
    }
  }, [open, id]);

  useEffect(() => {
    if (singleBudget) {
      setData(singleBudget);
    }
  }, [singleBudget]);

  return (
    <Popup title={"Update Budget"} open={open} handleClose={handleClose}>
      <DialogContent style={{ minWidth: "450px" }}>
        <div>Under Progress</div>
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

export default EditBudget;
