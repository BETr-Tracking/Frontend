import { Button, Stack } from "@mui/material";
import React, { useState } from "react";
import Category from "../../../components/Category";
import CardComponent from "../../../components/CardComponent";
import { useCategory } from "../hooks/useCategory";
import CreateUpdateCategory from "../../../components/Category/CreateUpdateCategory";

const Categories = () => {
  const {
    categories,
    createCategoryData,
    editCategoryData,
    deleteCategoryData,
  } = useCategory();
  const [open, setOpen] = useState(false);
  return (
    <CardComponent title={"Categories"}>
      <div className="category-create-section">
        <Button variant="contained" size="small" onClick={() => setOpen(true)}>
          Create Category
        </Button>
      </div>
      <CreateUpdateCategory
        open={open}
        setOpen={setOpen}
        createCategoryData={createCategoryData}
      />
      {categories && categories.length > 0 ? (
        <Stack direction="row" flexWrap="wrap" spacing={1} useFlexGap>
          {categories.map((item, index) => (
            <Category
              key={index}
              data={item}
              editCategoryData={editCategoryData}
              deleteCategoryData={deleteCategoryData}
            />
          ))}
        </Stack>
      ) : (
        <div>no categories</div>
      )}
    </CardComponent>
  );
};

export default Categories;
