import React from "react";
import "./Category.css"

function Category({ categoryName, filterCategories }) {

  
  return (
    <>
      <div
        className="text-center category"
        onClick={() => filterCategories(categoryName)}
        style={{cursor: "pointer"}}
      >
        <img src="./images/wallet.svg" />

        <p>{categoryName}</p>
      </div>
    </>
  );
}

export default Category;
