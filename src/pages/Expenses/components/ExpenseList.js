import React from "react";
import CardComponent from "../../../components/CardComponent";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({
  expenses,
  singleExpense,
  getSingleExpenseData,
  updateExpenseData,
  deleteExpenseData,
  view,
}) => {
  return (
    <CardComponent>
      {expenses && expenses.length > 0 ? (
        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {/* <TableCell /> */}
                <TableCell align="left">Date</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Amount</TableCell>
                <TableCell align="center">Category</TableCell>
                {!view && <TableCell align="right">Actions</TableCell>}
              </TableRow>
            </TableHead>
            <TableBody>
              {expenses.map((row, index) => {
                return (
                  <ExpenseItem
                    data={row}
                    key={index}
                    singleExpense={singleExpense}
                    getSingleExpenseData={getSingleExpenseData}
                    updateExpenseData={updateExpenseData}
                    deleteExpenseData={deleteExpenseData}
                    view={view}
                  />
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div>No Data Available</div>
      )}
    </CardComponent>
  );
};

export default ExpenseList;
