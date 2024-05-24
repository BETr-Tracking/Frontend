import React from "react";
import CardComponent from "../../../components/CardComponent";
import ExpenseList from "../../Expenses/components/ExpenseList";

const RecentExpenses = ({ data }) => {
  return (
    <CardComponent title={"Recent Expenses"}>
      <ExpenseList expenses={data} view={true} />
    </CardComponent>
  );
};

export default RecentExpenses;
