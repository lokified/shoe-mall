import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="order-footer">
            <div className="order-section">
              <img src="./images/circle-question-regular.svg" />

              <div className="order-desc">
                <h6>ORDER ASSISTANCE</h6>
                <p>Get help with ordering on our app, online or by phone.</p>
              </div>
            </div>

            <div className="order-section">
              <img src="./images/truck-solid.svg" />

              <div className="order-desc">
                <h6>TRACK YOUR ORDER</h6>
                <p>
                  Use your order number to check the location of your order.
                </p>
              </div>
            </div>

            <div className="order-section">
              <img src="./images/arrow-rotate-left-solid.svg" />

              <div className="order-desc">
                <h6>MAKE A RETURN</h6>
                <p>Print a return slip and make a return.</p>
              </div>
            </div>
          </div>
          <div className="links-footer">
            <div className="links-footer-des">
              <h3>
                <Link to="/">
                  SHOE <br />{" "}
                  <span style={{ color: "#FD5545", marginLeft: "2rem" }}>
                    MALL
                  </span>
                </Link>
              </h3>

              <p>
                We are the best online shoe store.Our delivery is on point
                because we care abot our customers satisfaction. The best.
              </p>
            </div>
            <div className="link-footer-1">
              <h6>GET TO KNOW US</h6>
              <p>Our Company</p>
              <p>Our Brand Family</p>
              <p>Investor relation</p>
              <p>Blog</p>
            </div>

            <div className="link-footer-2">
              <h6>CUSTOMER CARE</h6>
              <p>FAQs</p>
              <p>Shipping rates and policy</p>
              <p>Return policies</p>
              <p>Contact us</p>
              <p>Website accessibiity policy</p>
            </div>

            <div className="link-footer-3">
              <h6>GIFT CARDS</h6>
              <p>Buy a Gift Card</p>
              <p>Check your balance</p>
            </div>
          </div>

          <div className="socials-footer">
            <div>
              <p>2022. All rights reserved</p>
            </div>

            <div className="socials">
              <img src="./images/facebook.svg" />
              <img src="./images/twitter.svg" />
              <img src="./images/instagram.svg" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
