import { Chip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState } from "react";
import DeleteCategory from "./DeleteCategory";
import { stringToHslColor } from "../../miscellaneous/utils";
import CreateUpdateCategory from "./CreateUpdateCategory";

const Category = ({ data = { id: 1, name: "custom name" } }) => {
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  const handleDeleteOpen = () => {
    setOpen(true);
  };

  const handleEditOpen = () => {
    setEditOpen(true);
  };
  return (
    <>
      <Chip
        label={data.name}
        onClick={handleEditOpen}
        onDelete={handleDeleteOpen}
        deleteIcon={<DeleteIcon style={{ color: "#fff" }} />}
        variant="outlined"
        style={{
          background: stringToHslColor(`${data.id} ${data.name}`),
          borderColor: stringToHslColor(`${data.id} ${data.name}`),
          fontWeight: "bold",
          color: "#fff",
        }}
      />
      <DeleteCategory open={open} setOpen={setOpen} data={data} />
      <CreateUpdateCategory open={editOpen} setOpen={setEditOpen} data={data} />
    </>
  );
};

export default Category;
