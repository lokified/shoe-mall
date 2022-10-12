import React from 'react';
import Category from './Category';
import "./Category.css";

function Categories() {
    return (
      <>
        <div className="categories">
          <Category categoryName="Sport Shoes" />

          <Category categoryName="boots" />

          <Category categoryName="sandals" />

          <Category categoryName="ladies" />

          <Category categoryName="stilletos" />

          <Category categoryName="Red Bottoms" />
        </div>
      </>
    );
}

export default Categories;