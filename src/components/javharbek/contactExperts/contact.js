import React from "react";

import "./contact.css";

import expert1 from "../../../assets/images/expert-1.png";
import expert2 from "../../../assets/images/expert-2.png";
import expert3 from "../../../assets/images/expert-3.png";
import expert4 from "../../../assets/images/expert-4.png";
import useTheme from "../../Hook/useTheme";

function ContactExperts() {
  const [theme] = useTheme();
  return (
    <div className={`background ${theme}`}>
      <div className="connect container">
        <div className="connect_header">
          <h3 className="connect_header-title">Quick & Easy Process</h3>
          <p className="connect_header-text">
            Do you require some help for your project: Conception workshop,
            prototyping, marketing strategy, landing page, Ux/UI?
          </p>
        </div>
        <div className="connect_body">
          <div className="experts">
            <div className="expert_content">
              <img className="expert_img" src={expert1} alt="expert-1" />
              <p className="expert_text">I can take care of your pitch</p>
            </div>
            <div className="expert_content reverse">
              <img className="expert_img" src={expert4} alt="expert-2" />
              <p className="expert_text">I can design you website</p>
            </div>
          </div>
          <div className="experts">
            <div className="expert_content reverse">
              <img className="expert_img" src={expert2} alt="expert-3" />
              <p className="expert_text">I can prototype your app </p>
            </div>
            <div className="expert_content">
              <img className="expert_img" src={expert3} alt="expert-4" />
              <p className="expert_text">I can help marketing strategy</p>
            </div>
          </div>
        </div>
        <button className="connect-btn">Connect to expets</button>
      </div>
    </div>
  );
}

export default ContactExperts;
