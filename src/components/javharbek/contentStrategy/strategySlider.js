import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "./data";

import "swiper/css";
import "swiper/css/pagination";

import "./strategySlider.css";

import { Pagination } from "swiper";

export default function StrategySlider() {
  return (
    <div className="container">
      <div className="slider-content">
        <h3 className="slider-title">Contents Strategies</h3>
        <p className="slider-text">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          centeredSlides={true}
          initialSlide={1}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data.map((e, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="slider_img">
                  <img src={e.img} alt="strategy_img" cl />
                </div>
                <div className="strategy_content">
                  <p className="slider_subtitle">
                    By <span className="author">{e.author}</span> | {e.date}
                  </p>
                  <p className="slider_title">{e.title}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
