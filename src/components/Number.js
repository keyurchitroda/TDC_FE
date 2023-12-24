"use client";

import React from "react";
import "./css/Number.css";
const img1 = "/images/Number/1.svg";
const img2 = "/images/Number/2.svg";
const img3 = "/images/Number/3.svg";

export default function Number() {
  return (
    <div>
      <div className="number-main">
        <h3 className="number-main-h1">Some numbers that matter</h3>
        <div className="number-main-boxes">
          <div className="number-box1">
            <img src={img1} alt=""></img>
            <h2 className="box1-h2">200,000+</h2>
            <p>Community members</p>
          </div>
          <div className="number-box2">
            <img src={img2} alt=""></img>
            <h2 className="box2-h2">5,500+</h2>
            <p>Schools and colleges across India</p>
          </div>
          <div className="number-box3">
            <img src={img3} alt=""></img>
            <h2 className="box3-h2">1500+</h2>
            <p>Free events organized</p>
          </div>
        </div>
      </div>
    </div>
  );
}
