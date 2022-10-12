import React from 'react';
import Popular from './Popular';

function PopularList() {
    return (
      <>
        <div className="popular-list">
          <Popular image="./images/bogs.jpg" />

          <Popular image="./images/nike.webp" />

          <Popular image="./images/sandal.jpg" />

          <Popular image="./images/sketchers.jpg" />

          <Popular image="./images/timberland.jpg" />

          <Popular image="./images/crocs.jpg" />

          <Popular image="./images/women-nike.webp" />

          <Popular image="./images/men-balance.webp" />

          <Popular image="./images/basketball.webp" />
        </div>
      </>
    );
}

export default PopularList;