import React from "react";
import "./Category.css"

function Category({ image, categoryName, filterCategories }) {

  
  return (
    <>
      <div
        className="text-center category"
        onClick={() => filterCategories(categoryName)}
        style={{cursor: "pointer"}}
      >
        <img src={image} />

        <p>{categoryName}</p>
      </div>
    </>
  );
}

export default Category;
