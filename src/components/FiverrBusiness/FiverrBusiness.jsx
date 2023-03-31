import React from "react";
import "./FiverrBusiness.scss";
import check from "../../../public/img/check.png";
import business from "../../../public/img/business.webp";
import { Link } from "react-router-dom";

const FiverrBusiness = () => {
  return (
    <div className="fiverr-business">
      <div className="container">
        <div className="left">
          <h4>fiverr <span>business</span>. <spna className='badge'>New</spna></h4>
          
          <h2>
            A business solution <br /> designed for <i>teams</i>
          </h2>
          <p>
            Upgrade to a curated experience packed with tools and benefits,
            dedicated to businesses
          </p>
          <div className="content">
            <div className="title">
              <img src={check} alt="" />
              <strong>
                Connect to freelancers with proven business experience
              </strong>
            </div>
          </div>
          <div className="content">
            <div className="title">
              <img src={check} alt="" />
              <strong>
                Get matched with the perfect talent by a customer success
                manager
              </strong>
            </div>
          </div>
          <div className="content">
            <div className="title">
              <img src={check} alt="" />
              <strong>
                Manage teamwork and boost productivity with one powerful
                workspace
              </strong>
            </div>
          </div>

          <Link className="link"><button >Explore Fiverr Business</button></Link>
        </div>
        <div className="right">
          <div className="video-sec">
            <img className="video-tham" src={business} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiverrBusiness;
