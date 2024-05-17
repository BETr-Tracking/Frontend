import { handleErrResponse } from "../miscellaneous/utils";
import axios from "./instance";

export const createCategory = async (data) => {
  try {
    const res = await axios.post("/api/category/createCategory", data);
    return res.data;
  } catch (error) {
    return handleErrResponse(error.response);
  }
};

export const getCategories = async (uid) => {
  try {
    const res = await axios.get(`/api/category/getCategoriesOfUser/${uid}`);
    return res.data;
  } catch (error) {
    return handleErrResponse(error.response);
  }
};

export const updateCategory = async (data) => {
  try {
    const res = await axios.put("/api/category/updateCategoryName", data);
    return res.data;
  } catch (error) {
    return handleErrResponse(error.response);
  }
};

export const deleteCategory = async (cid, data) => {
  try {
    const res = await axios.delete(`/api/category/deleteCategory/${cid}`, {
      data,
    });
    return res.data;
  } catch (error) {
    return handleErrResponse(error.response);
  }
};
