import { handleErrResponse } from "../miscellaneous/utils";
import axios from "./instance";

export const createExpense = async (data) => {
  try {
    const res = await axios.post("/api/expense/createExpense", data);
    return res.data;
  } catch (error) {
    return handleErrResponse(error.response);
  }
};

export const getExpenses = async (uid) => {
  try {
    const res = await axios.get(`/api/expense/getAllExpensesOfUser/${uid}`);
    return res.data;
  } catch (error) {
    return handleErrResponse(error.response);
  }
};

export const getSingleExpense = async (eid) => {
    try {
      const res = await axios.get(`/api/expense/getExpense/${eid}`);
      return res.data;
    } catch (error) {
      return handleErrResponse(error.response);
    }
  };

export const updateExpense = async (data) => {
  try {
    const res = await axios.put("/api/expense/updateExpense", data);
    return res.data;
  } catch (error) {
    return handleErrResponse(error.response);
  }
};

export const deleteExpense = async (eid) => {
  try {
    const res = await axios.delete(`/api/expense/deleteExpense/${eid}`);
    return res.data;
  } catch (error) {
    return handleErrResponse(error.response);
  }
};
