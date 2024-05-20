import { handleErrResponse } from "../miscellaneous/utils";
import axios from "./instance";

export const createBudget = async (data) => {
  try {
    const res = await axios.post("http://localhost:8081/api/budget/createBudget", data);
    return res.data;
  } catch (error) {
    return handleErrResponse(error.response);
  }
};

export const getBudgets = async (uid) => {
  try {
    const res = await axios.get(`http://localhost:8081/api/budget/getAllBudgets/${uid}`);
    return res.data;
  } catch (error) {
    return handleErrResponse(error.response);
  }
};

export const getSingleBudget = async (bid) => {
    try {
      const res = await axios.get(`http://localhost:8081/api/budget/getBudget/${bid}`);
      return res.data;
    } catch (error) {
      return handleErrResponse(error.response);
    }
  };

export const updateBudget = async (data) => {
  try {
    const res = await axios.put("http://localhost:8081/api/budget/updateBudget", data);
    return res.data;
  } catch (error) {
    return handleErrResponse(error.response);
  }
};

export const deleteBudget = async (bid) => {
  try {
    const res = await axios.delete(`http://localhost:8081/api/budget/deleteBudget/${bid}`);
    return res.data;
  } catch (error) {
    return handleErrResponse(error.response);
  }
};
