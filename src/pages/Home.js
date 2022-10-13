import React, { useState } from "react";
import Categories from "../components/Categories";
import "./Home.css";
import list from "../data";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import Popular from "../components/Popular";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";

function Home({ handleClick }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [data, setData] = useState(list);

  const filterCategories = (catItem) => {
    const result = list.filter((curData) => {
      return curData.category === catItem;
    });
    setData(result);
  };

  return (
    <>
      <section>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add to cart successfully
            </Typography>
            <div style={{marginTop: "1rem", display: "flex", justifyContent: "flex-end"}}>
              <button style={shopButton} onClick={handleClose}>Shop more</button>
              <Link to="/cart" style={cartButton}>View Cart</Link>
            </div>
          </Box>
        </Modal>

        <div className="container home-section">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="./images/bogs.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/sandal.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/crocs.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/timberland.jpg" />
            </SwiperSlide>
          </Swiper>

          <h5 style={{ marginTop: "3rem" }}>Categories</h5>

          <Categories filterCategories={filterCategories} />

          <div className="popular-list">
            {data.map((item) => (
              <Popular
                key={item.id}
                item={item}
                handleClick={handleClick}
                handleOpen={handleOpen}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const shopButton = {
  border: "none",
  color: "f5f2eb",
  marginRight: ".8rem",
  borderRadius: ".3rem"
};

const cartButton = {
  textDecoration: "none",
  color: "#FD5545",
};

export default Home;