import { Chip } from "@mui/material";
import React from "react";

const FilterItem = ({ data ,filter, setFilter }) => {
  return (
    <Chip
      label={data}
      onClick={() => setFilter(data)}
      variant="outlined"
      style={{
        background: filter === data ? "blue" : "none",
        borderColor: filter === data ? "blue" : "#ccc",
        fontWeight: "bold",
        color: filter === data ? "#fff" : "#ccc",
      }}
    />
  );
};

export default FilterItem;
