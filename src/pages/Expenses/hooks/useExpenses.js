import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  createExpense,
  deleteExpense,
  getExpenses,
  getSingleExpense,
  updateExpense,
} from "../../../axios/expenses";

export const useExpenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const [search, setSearch] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [singleExpense, setSingleExpense] = useState(null);
  const user = useSelector((state) => state.user);

  const getExpensesData = async () => {
    const res = await getExpenses(user.uid);
    if (res) {
      if (res.err) {
      } else {
        // console.log(res)
        setExpenses(res);
      }
    }
  };

  const getSingleExpenseData = async (eid) => {
    const res = await getSingleExpense(eid);
    if (res) {
      if (res.err) {
      } else {
        setSingleExpense(res);
      }
    }
  };

  const createExpenseData = async (data) => {
    // console.log(data);
    const res = await createExpense({
      uid: user.uid,
      month: new Date(data.date).getMonth() + 1,
      year: new Date(data.date).getFullYear(),
      ...data,
    });
    if (res) {
      if (res.err) {
      } else {
        setRefresh(true);
        return true;
      }
    }
  };

  const updateExpenseData = async (data) => {
    const res = await updateExpense({
      month: new Date(data.date).getMonth() + 1,
      year: new Date(data.date).getFullYear(),
      ...data,
    });
    if (res) {
      if (res.err) {
      } else {
        setRefresh(true);
        return true;
      }
    }
  };

  const deleteExpenseData = async (data) => {
    const res = await deleteExpense(data.expenseId, {
      month: new Date(data.date).getMonth() + 1,
      year: new Date().getFullYear(),
    });
    if (res) {
      if (res.err) {
      } else {
        setRefresh(true);
      }
    }
  };

  useEffect(() => {
    getExpensesData();
  }, []);

  useEffect(() => {
    if (refresh) {
      getExpensesData();
      setRefresh(true);
    }
  }, [refresh]);

  useEffect(() => {
    if (search.length > 0) {
      setFilteredExpenses(expenses);
    }
  }, [search, expenses]);

  return {
    expenses,
    singleExpense,
    getSingleExpenseData,
    createExpenseData,
    updateExpenseData,
    deleteExpenseData,
  };
};
