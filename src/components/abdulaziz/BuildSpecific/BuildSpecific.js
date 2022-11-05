import React from "react";
import Cursor from "../../../assets/images/cursor.svg";
import Ds from "../../../assets/images/ds.svg";
import Heart from "../../../assets/images/heart.svg";
import Timer from "../../../assets/images/timer.svg";
import "./BuildSpecific.css";

export default function BuildSpecific() {
  return (
    <div className="build-specific">
      <div className="container">
        <h1 className="build-specific__title">
          Product was Built Specifically for You
        </h1>
      </div>
      <div className="build-specific__group">
        <div className="container">
          <div className="bs-card">
            <div className="bs-card__item">
              <div className="bs-card__pic">
                <img src={Cursor} />
              </div>
              <h3 className="bs-card__title">First click tests</h3>
              <p className="bs-card__desc">
                While most people enjoy casino gambling,
              </p>
            </div>

            <div className="bs-card__item">
              <div className="bs-card__pic">
                <img src={Ds} />
              </div>
              <h3 className="bs-card__title">First click tests</h3>
              <p className="bs-card__desc">
                Sports betting, lottery and bingo playing for the fun
              </p>
            </div>

            <div className="bs-card__item">
              <div className="bs-card__pic">
                <img src={Heart} />
              </div>
              <h3 className="bs-card__title">First click tests</h3>
              <p className="bs-card__desc">
                The Myspace page defines the individual.
              </p>
            </div>

            <div className="bs-card__item">
              <div className="bs-card__pic">
                <img src={Timer} />
              </div>
              <h3 className="bs-card__title">First click tests</h3>
              <p className="bs-card__desc">
                Personal choices and the overall personality of the person.
              </p>
            </div>
          </div>

          <a href="#" className="build-specific__btn">
            SIGN UP NOW
          </a>
        </div>
      </div>
    </div>
  );
}
