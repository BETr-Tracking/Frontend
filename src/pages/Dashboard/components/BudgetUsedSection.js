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

const BudgetUsedSection = ({ data }) => {
  return (
    <CardComponent title={"Budget Used"}>
      {data && data.length > 0 ? (
        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell align="left">Category</TableCell>
                <TableCell align="center">Allocated Amount</TableCell>
                <TableCell align="center">Spent Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => {
                return (
                  <TableRow>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="center">{row.all_amt}</TableCell>
                    <TableCell align="center">
                      <span
                        style={{
                          color:
                            row.spent_amt > row.all_amt
                              ? "red"
                              : row.spent_amt > row.all_amt / 2
                              ? "orange"
                              : "#000",
                        }}
                      >
                        {row.spent_amt}
                      </span>
                    </TableCell>
                  </TableRow>
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

export default BudgetUsedSection;
