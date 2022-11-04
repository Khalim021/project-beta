import React from "react";
import "./Collaborative.css";

function Collaborative() {
  return (
    <div className="collaborative container">
      <div className="collaborative-content">
        <p className="collaborative-content-info">Optimisation for</p>
        <h1 className="collaborative-content-header">Collaborative</h1>
        <p className="collaborative-content-text">
          Few would argue that, despite the advancements of feminism over the
          past three decades, women still face a double standard when it comes
          to their behavior.
        </p>
        <ul className="collaborative-content-list">
          <li className="collaborative-content-list-item">
            <h3 className="collaborative-content-list-item-title">
              Accessory makers
            </h3>
            <p className="collaborative-content-list-item-text">
              While most people enjoy casino gambling, sports betting, lottery
              and bingo playing for the fun
            </p>
          </li>

          <li className="collaborative-content-list-item">
            <h3 className="collaborative-content-list-item-title">
              Alterationists
            </h3>
            <p className="collaborative-content-list-item-text">
              If you are looking for a new way to promote your business that
              won’t cost you more money.
            </p>
          </li>
        </ul>
      </div>
      <div className="collaborative-img">
        <img src="./images/collaborative-img.svg" alt="collaborative img" />
      </div>
    </div>
  );
}

export default Collaborative;
