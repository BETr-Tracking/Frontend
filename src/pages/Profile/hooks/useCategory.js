import React, { useEffect, useState } from "react";

export const useCategory = () => {
  const [categories, setCategories] = useState([{ id: 1, name: "food" }]);
  const [refresh, setRefresh] = useState(false);

  const deleteCategory = (data) => {
    // delete fun and refresh
  };

  const editCategory = (data) => {
    // edit fun and refresh
  };

  const getCategoriesData = () => {};

  const createCategory = (name) => {};

  useEffect(() => {
    getCategoriesData();
  }, []);

  useEffect(() => {
    if (refresh) {
      getCategoriesData();
      setRefresh(false);
    }
  }, [refresh]);

  return { categories, deleteCategory, editCategory, createCategory };
};
