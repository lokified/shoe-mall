import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Cart from "./pages/Cart";
import React, { useState } from "react";
import list from "./data";
import Popular from "./components/Popular";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState([]);
  const [hideSearchItem, sethideSearchItem] = useState(false);
  const [isClicked, setisClicked] = useState(false);
  const [showHome, setShowHome] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState(list);

  const handleSearchClicked = () => {
    if (isClicked) {
      sethideSearchItem(true);
      setShowHome(false);
    }
  };

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <>
      <NavBar
        size={cart.length}
        setSearchTerm={setSearchTerm}
        setisClicked={setisClicked}
        handleSearchClicked={handleSearchClicked}
        setShowHome={setShowHome}
        sethideSearchItem={sethideSearchItem}
      />

      {hideSearchItem && (
        <div className=" container popular-list">
          {data
            .filter((item) => {
              if (searchTerm == "") {
                sethideSearchItem(false);
                setShowHome(true);
              } else if (
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return item;
              }
            })
            .map((item) => {
              return (
                <>
                  <Popular
                    key={item.id}
                    item={item}
                    handleClick={handleClick}
                  />
                </>
              );
            })}
        </div>
      )}

      {showHome && (
        <Routes>
          <Route path="/" element={<Home handleClick={handleClick} />} />
          <Route
            path="/cart"
            element={
              <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
            }
          />
        </Routes>
      )}
      
      <Footer />
    </>
  );
}

export default App;
