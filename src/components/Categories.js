import React from "react";
import Category from "./Category";
import "./Category.css";

function Categories({ filterCategories }) {
  return (
    <>
      <div className="categories">
        <Category
          categoryName="Sport Shoes"
          filterCategories={filterCategories}
        />

        <Category categoryName="boots" filterCategories={filterCategories} />

        <Category categoryName="sandals" filterCategories={filterCategories} />

        <Category categoryName="ladies" filterCategories={filterCategories} />

        <Category
          categoryName="stilletos"
          filterCategories={filterCategories}
        />

        <Category
          categoryName="Red Bottoms"
          filterCategories={filterCategories}
        />
      </div>
    </>
  );
}

export default Categories;
