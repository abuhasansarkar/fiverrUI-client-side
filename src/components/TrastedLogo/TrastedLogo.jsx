import React from "react";
import "./TrastedLogo.scss";
import meta from '../../../public/logo/logo (3).png';
import google from '../../../public/logo/logo (2).png';
import netflix from '../../../public/logo/logo (4).png';
import pandg from '../../../public/logo/logo (5).png';
import paypal from '../../../public/logo/logo (1).png';

const TrastedLogo = () => {
  return (
    <div className="trasted-logo">
      <div className="container">
        <strong>Trusted by:</strong>
          <img src={meta} alt="logo" />
          <img src={google} alt="logo" />
          <img src={netflix} alt="logo" />
          <img src={pandg} alt="logo" />
          <img src={paypal} alt="logo" />
      </div>
    </div>
  );
};

export default TrastedLogo;
