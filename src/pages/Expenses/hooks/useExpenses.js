import React, { useEffect, useState } from "react";

export const useExpenses = () => {
  const [expenses, setExpenses] = useState([1, 2, 3]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const [search, setSearch] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [singleExpense, setSingleExpense] = useState(null);

  const getExpenses = async () => {};

  const getSingleExpense = async (data) => {};

  const createExpense = async (data) => {};

  const updateExpense = async (data) => {};

  const deleteExpense = async (data) => {};

  useEffect(() => {
    getExpenses();
  }, []);

  useEffect(() => {
    if (refresh) {
      getExpenses();
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
    getSingleExpense,
    createExpense,
    updateExpense,
    deleteExpense,
  };
};
