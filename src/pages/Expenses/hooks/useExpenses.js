import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createExpense, deleteExpense, getExpenses, getSingleExpense, updateExpense } from "../../../axios/expenses";

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
    const res = await createExpense({ id: user.uid, ...data });
    if (res) {
      if (res.err) {
      } else {
        setRefresh(true);
        return true;
      }
    }
  };

  const updateExpenseData = async (data) => {
    const res = await updateExpense(data);
    if (res) {
      if (res.err) {
      } else {
        setRefresh(true);
      }
    }
  };

  const deleteExpenseData = async (eid) => {
    const res = await deleteExpense(eid);
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
