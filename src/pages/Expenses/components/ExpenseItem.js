import {
  Box,
  Collapse,
  IconButton,
  Menu,
  MenuItem,
  TableCell,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { DisplayCategory } from "../../../components/Category";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import EditExpense from "./EditExpense";
import DeleteExpense from "./DeleteExpense";
import dayjs from "dayjs";

const ExpenseItem = ({
  data,
  singleExpense,
  getSingleExpenseData,
  updateExpenseData,
  deleteExpenseData,
  view,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    setEditOpen(true);
    handleClose();
  };

  const handleDelete = () => {
    setDeleteOpen(true);
    handleClose();
  };
  return (
    <>
      <TableRow>
        {/* <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell> */}
        <TableCell align="left">
          {dayjs(data.date).format("DD/MM/YYYY")}
        </TableCell>
        <TableCell align="center">{data.description}</TableCell>
        <TableCell align="center">{data.amount}</TableCell>
        <TableCell align="center">
          {data.category ? (
            <DisplayCategory data={{ name: data.category.name }} />
          ) : (
            <div>-</div>
          )}
        </TableCell>
        {!view && (
          <TableCell align="right">
            <IconButton onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleEdit}>Edit</MenuItem>
              <MenuItem onClick={handleDelete}>Delete</MenuItem>
            </Menu>
            {/* edit popup */}
            <EditExpense
              open={editOpen}
              setOpen={setEditOpen}
              id={data.expenseId}
              singleExpense={singleExpense}
              getSingleExpenseData={getSingleExpenseData}
              updateExpenseData={updateExpenseData}
            />
            {/* delete popup */}
            <DeleteExpense
              open={deleteOpen}
              setOpen={setDeleteOpen}
              data={data}
              deleteExpenseData={deleteExpenseData}
            />
          </TableCell>
        )}
      </TableRow>
      {/* <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>content here</Box>
          </Collapse>
        </TableCell>
      </TableRow> */}
    </>
  );
};

export default ExpenseItem;
