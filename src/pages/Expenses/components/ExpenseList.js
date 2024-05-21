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
import { useExpenses } from "../hooks/useExpenses";

const ExpenseList = () => {
  const { expenses } = useExpenses();
  return (
    <CardComponent>
      {expenses && expenses.length > 0 ? (
        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell align="left">Title</TableCell>
                <TableCell align="center">Amount</TableCell>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Category</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {expenses.map((row, index) => {
                return <ExpenseItem data={row} key={index} />;
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
