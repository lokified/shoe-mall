import React from "react";
import Category from "./Category";
import "./Category.css";

function Categories({ filterCategories }) {
  return (
    <>
      <div className="categories">
        <Category image="./images/sport-cat.jpg"
          categoryName="Sport Shoes"
          filterCategories={filterCategories}
        />

        <Category image="./images/boot-cat.jpg" categoryName="boots" filterCategories={filterCategories} />

        <Category image="./images/sandal-cat.jpg" categoryName="sandals" filterCategories={filterCategories} />

        <Category image="./images/ladies-cat.jpg" categoryName="ladies" filterCategories={filterCategories} />

        <Category image="./images/stilleto-cat.jpg"
          categoryName="stilletos"
          filterCategories={filterCategories}
        />

        <Category image="./images/work.jpeg"
          categoryName="Work Boots"
          filterCategories={filterCategories}
        />
      </div>
    </>
  );
}

export default Categories;
