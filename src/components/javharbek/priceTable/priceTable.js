import React from "react";

import "./priceTable.css";

function PriceTable() {
  return (
    <div id="pricing" className="container price_table">
      <h3 className="price_title">Price Table</h3>
      <p className="price_subtitle">We offer competitive price</p>
      <div className="price_table-container">
        <div className="price_table-box">
          <h6 className="box-title">Free</h6>
          <p className="box-subtitle">Brief price description</p>
          <div className="box_price-content">
            <p className="box_price">0</p>
            <div className="price_content">
              <p className="price_symbol">$</p>
              <p className="price_subscribe">Per / month</p>
            </div>
          </div>
          <ul className="price_advantages">
            <li>Only 2 Operators</li>
            <li>Notifications</li>
            <li>Landing Pages</li>
          </ul>
          <button className="order_btn">Order Now</button>
        </div>
        <div className="price_table-box box-active">
          <h6 className="box-title">Standard</h6>
          <p className="box-subtitle">Brief price description</p>
          <div className="box_price-content">
            <p className="box_price">5</p>
            <div className="price_content">
              <p className="price_symbol">$</p>
              <p className="price_subscribe">Per / month</p>
            </div>
          </div>
          <ul className="price_advantages">
            <li>5+ Operators</li>
            <li>Notifications</li>
            <li>Landing Pages</li>
          </ul>
          <button className="order_btn">Order Now</button>
        </div>
        <div className="price_table-box">
          <h6 className="box-title">Premium</h6>
          <p className="box-subtitle">Brief price description</p>
          <div className="box_price-content">
            <p className="box_price">10</p>
            <div className="price_content">
              <p className="price_symbol">$</p>
              <p className="price_subscribe">Per / month</p>
            </div>
          </div>
          <ul className="price_advantages">
            <li>5+ Operators</li>
            <li>Notifications</li>
            <li>Landing Pages</li>
          </ul>
          <button className="order_btn">Order Now</button>
        </div>
      </div>
    </div>
  );
}

export default PriceTable;
