import React from "react";
import { Link } from "react-router-dom";
import "./Popular.css";

function Popular({ item, handleClick, handleOpen }) {
  const { image, category, name, price } = item;

  return (
    <>
      <div className="popular">
        <img src={image} />
        <p
          className="text-center"
          style={{ fontWeight: "bold", marginTop: "1rem" }}
        >
          {category}
        </p>
        <p className="text-center">{name}</p>
        <div className="price-section">
          <p style={{ fontWeight: "bold", marginTop: ".5rem" }}>Ksh{price}</p>

          <button
            onClick={() => {
              handleClick(item);
              handleOpen()
            }}
          >
            add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Popular;
