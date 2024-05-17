import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  createBudget,
  deleteBudget,
  getBudgets,
  getSingleBudget,
  updateBudget,
} from "../../../axios/budget";

export const useBudget = () => {
  const [budgets, setBudgets] = useState([]);
  const [singleBudget, setSingleBudget] = useState(null);
  const [search, setSearch] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [filter, setFilter] = useState("All");
  const user = useSelector((state) => state.user);
  const getBudgetsData = async () => {
    const res = await getBudgets(user.uid);
    if (res) {
      if (res.err) {
      } else {
        setBudgets(res);
      }
    }
  };

  const getSingleBudgetData = async (bid) => {
    const res = await getSingleBudget(bid);
    if (res) {
      if (res.err) {
      } else {
        setSingleBudget(res);
      }
    }
  };

  const createBudgetData = async (data) => {
    const res = await createBudget({ id: user.uid, ...data });
    if (res) {
      if (res.err) {
      } else {
        setRefresh(true);
        return true;
      }
    }
  };

  const updateBudgetData = async (data) => {
    const res = await updateBudget(data);
    if (res) {
      if (res.err) {
      } else {
        setRefresh(true);
      }
    }
  };

  const deleteBudgetData = async (bid) => {
    const res = await deleteBudget(bid);
    if (res) {
      if (res.err) {
      } else {
        setRefresh(true);
      }
    }
  };

  useEffect(() => {
    getBudgetsData();
  }, []);

  useEffect(() => {
    if (refresh) {
      getBudgetsData();
      setRefresh(true);
    }
  }, [refresh]);

  // useEffect(() => {
  //   if (search.length > 0) {
  //     setFilteredBudgets(budgets);
  //   }
  // }, [search, budgets]);

  return {
    budgets,
    singleBudget,
    filter,
    setFilter,
    getSingleBudgetData,
    createBudgetData,
    updateBudgetData,
    deleteBudgetData,
  };
};
