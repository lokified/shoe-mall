import React from "react";
import { Link } from "react-router-dom";
import "./Popular.css";

function Popular({image}) {
  return (
    <>
      <div className="popular">
        <img src={image} />
        <p className="text-center" style={{ fontWeight: "bold", marginTop: "1rem" }}>
          Boots
        </p>
        <p className="text-center">Rain Gumboots</p>
        <div className="price-section">
          <p style={{fontWeight: "bold", marginTop: ".5rem"}}>ksh.3000</p>

          <button to="/cart">add to Cart </button>
        </div>
      </div>
    </>
  );
}

export default Popular;
