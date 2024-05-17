import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from "../../../axios/categories";

export const useCategory = () => {
  const [categories, setCategories] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const user = useSelector((state) => state.user);

  const deleteCategoryData = async (cid) => {
    // delete fun and refresh
    const reqData = {
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
    };
    const res = await deleteCategory(cid, reqData);
    if (res) {
      if (res.err) {
      } else {
        setRefresh(true);
      }
    }
  };

  const editCategoryData = async (data) => {
    // edit fun and refresh
    const res = await updateCategory(data);
    if (res) {
      if (res.err) {
      } else {
        setRefresh(true);
      }
    }
  };

  const getCategoriesData = async () => {
    const res = await getCategories(user.uid);
    if (res) {
      if (res.err) {
      } else {
        setCategories(res);
      }
    }
  };

  const createCategoryData = async (name) => {
    const reqData = { id: user.uid, name };
    const res = await createCategory(reqData);
    if (res) {
      if (res.err) {
      } else {
        setRefresh(true);
      }
    }
  };

  useEffect(() => {
    getCategoriesData();
  }, []);

  useEffect(() => {
    if (refresh) {
      getCategoriesData();
      setRefresh(false);
    }
  }, [refresh]);

  return {
    categories,
    deleteCategoryData,
    editCategoryData,
    createCategoryData,
  };
};
