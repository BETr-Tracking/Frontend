import {
  Box,
  Collapse,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import EditBudget from "./EditBudget";
import DeleteBudget from "./DeleteBudget";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const CommonBudgetComponent = ({ data,updateBudgetData, deleteBudgetData }) => {
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
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="center">{data.budget.month}</TableCell>
        <TableCell align="center">{data.budget.year}</TableCell>
        <TableCell align="center">{data.categories.length}</TableCell>
        <TableCell align="center">{data.allocated_amount}</TableCell>
        <TableCell align="center">{data.spent_amount}</TableCell>
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
          <EditBudget
            open={editOpen}
            setOpen={setEditOpen}
            id={data.budget.budgetId}
            updateBudgetData={updateBudgetData}
          />
          {/* delete popup */}
          <DeleteBudget
            open={deleteOpen}
            setOpen={setDeleteOpen}
            data={data}
            deleteBudgetData={deleteBudgetData}
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Category</TableCell>
                      <TableCell align="right">Allocated Amount</TableCell>
                      <TableCell align="right">Spent Amount</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.categories.map((row, i) => (
                      <TableRow
                        key={i}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.allocated_amount}</TableCell>
                        <TableCell align="right">{row.spent_amount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default CommonBudgetComponent;
