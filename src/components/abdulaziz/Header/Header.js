import React from "react";
import "./Header.css";
import BannerImg from "../../../assets/images/social-media-amico.png";
import Play from "../../../assets/images/play.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__text">
          <h1 className="header__title">Work at the speed of thought</h1>
          <p className="header__desc">
            Tools, tutorials, design and innovation experts, all in one place!
            The most intuitive way to imagine your next user experience.
          </p>
          <div className="header__btns">
            <a href="#" className="header__btn">
              Get started
            </a>
            <a href="#" className="header__play">
              <img src={Play} />
              <span>Watch the Video</span>
            </a>
          </div>
        </div>
        <img src={BannerImg} className="header__img" />
      </div>
    </header>
  );
}
