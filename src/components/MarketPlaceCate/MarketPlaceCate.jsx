import React from "react";
import "./MarketPlaceCate.scss";
import graphics from "../../../public/svgicon/graphics-design.91dfe44.svg";
import digital from "../../../public/svgicon/online-marketing.a3e9794.svg";
import writing from "../../../public/svgicon/writing-translation.a787f2f.svg";
import video from "../../../public/svgicon/video-animation.1356999.svg";
import music from "../../../public/svgicon/music-audio.ede4c90.svg";
import programing from "../../../public/svgicon/programming.6ee5a90.svg";
import business from "../../../public/svgicon/business.fabc3a7.svg";
import lifestyle from "../../../public/svgicon/lifestyle.112b348.svg";
import data from "../../../public/svgicon/data.855fe95.svg";
import photograpy from "../../../public/svgicon/photography.0cf5a3f.svg";
import { Link } from "react-router-dom";

const MarketPlaceCate = () => {
  const marketCate = [
    {
      _id: 1,
      title: "Graphics Design",
      icon: graphics,
    },
    {
      _id: 2,
      title: "Digital Marketing",
      icon: digital,
    },
    {
      _id: 3,
      title: "Writing & Transltion",
      icon: writing,
    },
    {
      _id: 4,
      title: "Video & Animation",
      icon: video,
    },
    {
      _id: 5,
      title: "Music & Audio",
      icon: music,
    },
    {
      _id: 6,
      title: "Programming & Tech",
      icon: programing,
    },
    {
      _id: 7,
      title: "Business",
      icon: business,
    },
    {
      _id: 8,
      title: "LifeStyle",
      icon: lifestyle,
    },
    {
      _id: 9,
      title: "Data Entry",
      icon: data,
    },
    {
      _id: 10,
      title: "Photography",
      icon: photograpy,
    },
  ];

  return (
    <div className="marketplacec-cate">
      <div className="container">
        <h2>Explore the marketplace</h2>
        <div className="all-services">
          {marketCate.map((category) => (
            <Link key={category._id} className="cat-item link">
              <img src={category.icon} alt="icon" />
              <hr />
              <h4>{category.title}</h4>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketPlaceCate;
