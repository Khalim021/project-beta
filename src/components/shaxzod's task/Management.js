import React from "react";
import "./Management.css";

function Management() {
  return (
    <div className="management container">
      <div className="management-content">
        <p className="management-content-info">Effortless Validation for</p>
        <h1 className="management-content-header">Management</h1>
        <p className="management-content-text">
          The Myspace page defines the individual, his or her characteristics,
          traits, personal choices and the overall personality of the person.
        </p>
        <ul className="management-content-list">
          <li className="management-content-list-item">
            <h3 className="management-content-list-item-title">
              Accessory makers
            </h3>
            <p className="management-content-list-item-text">
              While most people enjoy casino gambling, sports betting, lottery
              and bingo playing for the fun
            </p>
          </li>

          <li className="management-content-list-item">
            <h3 className="management-content-list-item-title">
              Alterationists
            </h3>
            <p className="management-content-list-item-text">
              If you are looking for a new way to promote your business that
              won’t cost you more money,{" "}
            </p>
          </li>
        </ul>
      </div>
      <div className="management-img">
        <img src="./images/management-img.svg" alt="management img" />
      </div>
    </div>
  );
}

export default Management;
