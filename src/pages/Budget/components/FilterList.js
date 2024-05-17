import React from "react";
import FilterItem from "./FilterItem";
import { Stack } from "@mui/material";

const FilterList = ({ filter, setFilter }) => {
  return (
    <Stack direction="row" flexWrap="wrap" spacing={1} useFlexGap>
      {["All", "Current", "Previous", "Upcoming"].map((item, i) => (
        <FilterItem key={i} data={item} filter={filter} setFilter={setFilter} />
      ))}
    </Stack>
  );
};

export default FilterList;
