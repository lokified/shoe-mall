import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar(props) {
  return (
    <>
      <nav>
        <div className="container nav-section">
          <div className="nav-logo">
            <h4>
              <Link to="/">
                SHOE <br />{" "}
                <span style={{ color: "#FD5545", marginLeft: "2rem" }}>
                  MALL
                </span>
              </Link>
            </h4>
          </div>

          <div className="nav-links-section">
            <div className="nav-search">
              <input />
              <button>Search</button>
            </div>

            <div className="nav-links">
              <ul>
                <li>
                  <Link to="/women">Women</Link>
                </li>

                <li>
                  <Link to="/men">Men</Link>
                </li>

                <li>
                  <Link to="/kids">Kids</Link>
                </li>

                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>

              <div className="nav-user-links">
                <div className="account">Account</div>
                <div className="cart">cart</div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
