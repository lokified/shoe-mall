import React from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import PopularList from "../components/PopularList";
import "./Home.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

function Home() {
 
  return (
    <>
      <section>
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

          <h5>Categories</h5>
          <Categories />
          <h5>Popular Items</h5>

          <PopularList />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
