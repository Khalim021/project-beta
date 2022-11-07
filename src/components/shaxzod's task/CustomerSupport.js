import React from "react";
import "./CustomerSupport.css";

function CustomerSupport() {
  return (
    <div>
      <div className="customer container">
        <div className="customer-img">
          <img src="./images/customer-img.svg" alt="customer img" />
        </div>
        <div className="customer-content">
          <p className="customer-content-info">Easier decision making for</p>
          <h1 className="customer-content-header">Customer Support</h1>
          <p className="customer-content-text">
            The Myspace page defines the individual, his or her characteristics,
            traits, personal choices and the overall personality of the person.
          </p>
          <ul className="customer-content-list">
            <li className="customer-content-list-item">
              <span className="customer-content-img">
                <img
                  src="./images/yellow-circle.svg"
                  alt=""
                  className="customer-content-list-item-img"
                />
                <img
                  className="check-icon"
                  src="./images/check-icon.svg"
                  alt=""
                />
              </span>

              <p className="customer-content-list-item-text">
                Never worry about overpaying for your energy again.
              </p>
            </li>

            <li className="customer-content-list-item">
              <span className="customer-content-img">
                <img
                  src="./images/red-circle.svg"
                  alt=""
                  className="customer-content-list-item-img"
                />
                <img
                  className="check-icon"
                  src="./images/check-icon.svg"
                  alt=""
                />
              </span>
              <p className="customer-content-list-item-text">
                We will only switch you to energy companies that we trust and
                will treat you right
              </p>
            </li>

            <li className="customer-content-list-item">
              <span className="customer-content-img">
                <img
                  src="./images/blue-circle.svg"
                  alt=""
                  className="customer-content-list-item-img"
                />
                <img
                  className="check-icon"
                  src="./images/check-icon.svg"
                  alt=""
                />
              </span>
              <p className="customer-content-list-item-text">
                We track the markets daily and know where the savings are.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CustomerSupport;
