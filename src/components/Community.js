"use client";

import React from "react";
import "./css/Community.css";

const img1 = "/images/Community/goa-university.png";
const img2 = "/images/Community/iiit.png";
const img3 = "/images/Community/iisc.png";
const img4 = "/images/Community/iiser.png";
const img5 = "/images/Community/mit.png";
const img6 = "/images/Community/pes.png";
const img7 = "/images/Community/svit.png";
const img8 = "/images/Community/symbiosis.png";
const img9 = "/images/Community/vit.png";

export default function Community() {
  return (
    <div>
      <div className="community_main">
        <div className="container mx-auto">
          <h3 className="community-h1">OUR COMMUNITY MEMBERS COME FROM</h3>
          <div id="infinite" className="highway-slider">
            <div className="container highway-barrier">
              <ul className="highway-lane">
                <li className="highway-car">
                  <img src={img1} />
                </li>
                <li className="highway-car">
                  <img src={img2} />
                </li>
                <li className="highway-car">
                  <img src={img3} />
                </li>
                <li className="highway-car">
                  <img src={img4} />
                </li>
                <li className="highway-car">
                  <img src={img5} />
                </li>
                <li className="highway-car">
                  <img src={img6} />
                </li>
                <li className="highway-car">
                  <img src={img7} />
                </li>
                <li className="highway-car">
                  <img src={img8} />
                </li>
                <li className="highway-car">
                  <img src={img9} />
                </li>

                <li className="highway-car">
                  <img src={img1} />
                </li>
                <li className="highway-car">
                  <img src={img2} />
                </li>
                <li className="highway-car">
                  <img src={img3} />
                </li>
                <li className="highway-car">
                  <img src={img4} />
                </li>
                <li className="highway-car">
                  <img src={img5} />
                </li>
                <li className="highway-car">
                  <img src={img6} />
                </li>
                <li className="highway-car">
                  <img src={img7} />
                </li>
                <li className="highway-car">
                  <img src={img8} />
                </li>
                <li className="highway-car">
                  <img src={img9} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
