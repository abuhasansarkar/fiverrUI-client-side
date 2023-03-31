import React from "react";
import { Link } from "react-router-dom";
import './ServiceCard.scss'

const ServiceCard = ({ card }) => {
     // console.log(card.id);
  return (
      <Link className="link" to='/gigs?cat=webdesing'>
        <div className="serviceCard">
          <img src={card.img} alt="img" />
          <div className="content">
               <p>{card.desc}</p>
               <h2>{card.title}</h2>
          </div>
        </div>
      </Link>
  );
};

export default ServiceCard;
