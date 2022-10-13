import React from 'react';
import "./CartItem.css"

function CartItem({item, handleRemove, handleChange}) {

    const {id, img, name, price, amount} = item

    return (
      <>
        <div className="cart_box" key={id}>
          <div className="cart_img">
            <img src={img} className="cart_box_img" />
            <p>{name}</p>
          </div>
          <div>
            <button style={buttonStyle} onClick={() => handleChange(item, 1)}>
              +
            </button>
            <button style={buttonStyle}>{amount}</button>
            <button style={buttonStyle} onClick={() => handleChange(item, -1)}>
              -
            </button>
          </div>
          <div>
            <span>ksh {price}</span>
            <button style={deleteButton} onClick={() => handleRemove(id)}>
              Remove
            </button>
          </div>
        </div>
      </>
    );
}

const buttonStyle = {
  backgroundColor: "#f5f2eb",
  outline: "none",
  border: "none",
  borderRadius: ".2rem",
};

const deleteButton = {
  backgroundColor: "#f5f2eb",
  outline: "none",
  border: "none",
  borderRadius: ".2rem",
  color: "black",
};

export default CartItem;