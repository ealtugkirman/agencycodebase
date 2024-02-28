import React from "react";
import BlogCategories from "./BlogCategories";
const categories = [
  { name: "Technology", slug: "technology" },
  { name: "Design", slug: "design" },
];

const CategoriesParent = () => {
  return (
    <div>
      <h1>Categories</h1>
      <BlogCategories categories={categories} />
    </div>
  );
};

export default CategoriesParent;
