import React from "react";
import "./FingerTips.scss";
import check from "../../../public/img/check.png";
import play from "../../../public/img/play.webp";
import fingertips from "../../../public/img/fingertips.webp";
import { Link } from "react-router-dom";

const FingerTips = () => {
  return (
    <div className="fingertips">
      <div className="container">
        <div className="left">
          <h2>A whole world of freelance talent at your fingertips</h2>
          <div className="content">
            <div className="title">
              <img src={check} alt="" />
              <strong>The best for every budget</strong>
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="content">
            <div className="title">
              <img src={check} alt="" />
              <strong>Quality work done quickly</strong>
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
          </div>
          <div className="content">
            <div className="title">
              <img src={check} alt="" />
              <strong>Protected payments, every time</strong>
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
          </div>
          <div className="content">
            <div className="title">
              <img src={check} alt="" />
              <strong>24/7 support</strong>
            </div>
            <p>
              Questions? Our round-the-clock support team is available to help
              anytime, anywhere.
            </p>
          </div>
        </div>
        <div className="right">
          <div className="video-sec">
            <img className="video-tham" src={fingertips} alt="img" />
            <Link className="link">
              <img className="play-icon" src={play} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FingerTips;
