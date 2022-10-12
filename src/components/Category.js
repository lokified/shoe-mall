import React from "react";
import "./Category.css"

function Category({categoryName}) {
  return (
    <>
      <div className="text-center category">
        <img src="./images/wallet.svg" />

        <p>{categoryName}</p>
      </div>
    </>
  );
}

export default Category;
