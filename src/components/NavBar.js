import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar({
  size,
  setSearchTerm,
  setisClicked,
  handleSearchClicked,
  setShowHome,
  sethideSearchItem,
}) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav>
        <div className="container nav-section">
          <button onClick={handleClick} className="drop-btn">
            <i className={click ? "uil uil-multiply" : "uil uil-align"}></i>
          </button>

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
              <input
                type="text"
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  handleSearchClicked();
                  setisClicked(true);
                }}
              >
                Search
              </button>
            </div>

            <div className="nav-links">
              <ul className={click ? "links active" : "links"}>
                <li>
                  <Link to="/women" onClick={closeMobileMenu}>
                    Women
                  </Link>
                </li>

                <li>
                  <Link to="/men" onClick={closeMobileMenu}>
                    Men
                  </Link>
                </li>

                <li>
                  <Link to="/kids" onClick={closeMobileMenu}>
                    Kids
                  </Link>
                </li>

                <li>
                  <Link to="/about" onClick={closeMobileMenu}>
                    About
                  </Link>
                </li>
              </ul>

              <div className="nav-user-links">
                <div className="cart">
                  <span>
                    <Link
                      to="/cart"
                      onClick={() => {
                        sethideSearchItem(false);
                        setShowHome(true);
                      }}
                    >
                      <i className="fas fa-cart-plus"></i>
                    </Link>
                  </span>
                  <span>{size}</span>
                </div>

                <div className="account">
                  Account
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
