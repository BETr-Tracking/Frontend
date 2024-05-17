import { Delete } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import React from "react";

export const CategoryListTable = ({ data, categories, deleteCategoryList }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, i) => (
            <TableRow
              key={i}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {categories.find((item) => item.categoryId === row.cid).name}
              </TableCell>
              <TableCell align="right">{row.amt}</TableCell>
              <TableCell align="right">
                <IconButton onClick={() => deleteCategoryList(row.cid)}>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const CategoryAmountSection = ({ data, handleChange, categories }) => {
  return (
    <>
      <FormControl fullWidth>
        <Select value={data.cid}>
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
        value={data.amt}
        disabled
      />
    </>
  );
};

export default CategoryAmountSection;
