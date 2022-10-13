import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import Footer from "../components/Footer";

import "./Cart.css";

function Cart({ cart, setCart, handleChange }) {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <>
      <section>
        <div className="container" style={{ width: "60%", marginTop: "5rem" }}>
          {cart.map((item) => (
            <CartItem
              item={item}
              handleChange={handleChange}
              handleRemove={handleRemove}
            />
          ))}
          <div className="checkout-section">
            <div className="total">
              <div className="total-1">
                <img src="./images/arrow-rotate-left-solid.svg" />
                <p>7 days return policy</p>
              </div>
              <div className="total-2">
                <span>Total</span>
                <span>ksh {price}</span>
              </div>
            </div>

            <div className="checkout">
              <Link to="/">Continue Shopping</Link>

              <button>Proceed to CheckOut</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Cart;
