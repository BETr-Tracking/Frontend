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
import CommonBudgetComponent from "./CommonBudgetComponent";

const AllBudgets = ({ data, deleteBudgetData, updateBudgetData }) => {
  return (
    <CardComponent>
      {/* {filter === "All" ? ( */}
      {data.length > 0 ? (
        <CommonBudgetList
          data={data}
          deleteBudgetData={deleteBudgetData}
          updateBudgetData={updateBudgetData}
        />
      ) : (
        <div>No Data Available</div>
      )}
      {/* ) : filter === "Current" ? (
        <CurrentBudget />
      ) : filter === "Previous" ? (
        <CommonBudgetList data={budgets} />
      ) : filter === "Upcoming" ? (
        <CommonBudgetList data={budgets} />
      ) : (
        <></>
      )} */}
    </CardComponent>
  );
};

const CommonBudgetList = ({ data, deleteBudgetData, updateBudgetData }) => {
  return (
    <TableContainer>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="center">Month</TableCell>
            <TableCell align="center">Year</TableCell>
            <TableCell align="center">No of Categories</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => {
            return (
              <CommonBudgetComponent
                data={row}
                key={index}
                deleteBudgetData={deleteBudgetData}
                updateBudgetData={updateBudgetData}
              />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AllBudgets;
