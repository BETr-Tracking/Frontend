import { handleErrResponse } from "../miscellaneous/utils";
import axios from "./instance";

export const createBudget = async (data) => {
  try {
    const res = await axios.post("/api/budget/createBudget", data);
    return res.data;
  } catch (error) {
    return handleErrResponse(error.response);
  }
};

export const getBudgets = async (uid) => {
  try {
    const res = await axios.get(`/api/budget/getAllBudgets/${uid}`);
    return res.data;
  } catch (error) {
    return handleErrResponse(error.response);
  }
};

export const getSingleBudget = async (bid) => {
    try {
      const res = await axios.get(`/api/budget/getBudget/${bid}`);
      return res.data;
    } catch (error) {
      return handleErrResponse(error.response);
    }
  };

export const updateBudget = async (data) => {
  try {
    const res = await axios.put("/api/budget/updateBudget", data);
    return res.data;
  } catch (error) {
    return handleErrResponse(error.response);
  }
};

export const deleteBudget = async (bid) => {
  try {
    const res = await axios.delete(`/api/budget/deleteBudget/${bid}`);
    return res.data;
  } catch (error) {
    return handleErrResponse(error.response);
  }
};
