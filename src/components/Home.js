"use client";
import React from "react";
import "./css/Home.css";

import Community from "./Community";
import Things from "./Things";
import Number from "./Number";
import Feedback from "./Feedback";
import Faqs from "./Faqs";
import Footer from "./Footer";

const img1 = "/images/Home/diamond.png";
const img2 = "/images/Home/pizza.png";
const img3 = "/images/Home/1.png";
const img4 = "/images/Home/2.png";
const img5 = "/images/Home/3.png";
const img6 = "/images/Home/4.png";
const img7 = "/images/Home/5.png";
const img8 = "/images/Home/6.png";

export default function Home() {
  return (
    <>
      <div>
        <div className="home-main">
          <div className="home-main-bc-img">
            <img src={img1} alt="" className="img1"></img>
            <img src={img6} alt="" className="img2"></img>
            <img src={img1} alt="" className="img3"></img>
            <img src={img2} alt="" className="img4"></img>
            <img src={img3} alt="" className="img5"></img>
            <img src={img4} alt="" className="img6"></img>
            <img src={img5} alt="" className="img7"></img>
            <img src={img2} alt="" className="img8"></img>
            <img src={img7} alt="" className="img9"></img>
            <img src={img1} alt="" className="img10"></img>
            <img src={img8} alt="" className="img11"></img>
            <img src={img2} alt="" className="img12"></img>
            <img src={img1} alt="" className="img13"></img>
            <div className="home-main-heading">
              <div className="home-main2-heading">
                <h1 className="home-main-h1">
                  The largest community of tomorrow’s
                </h1>
                <h1 className="home-main-h2">builders with 200,000+ members</h1>
              </div>
              <p className="home-main-heading-p">
                A place where you can learn, find work opportunities, and meet
                passionate people to grow with.
              </p>
              <div className="home-main-btn-div1">
                <div className="home-main-btn-div2">
                  <button className="home-main-btn1 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 35 35"
                    >
                      <path d="M 7.6230469 3.2109375 L 18 13.585938 L 20.677734 10.908203 C 17.018734 8.6882031 12.118063 5.7100938 9.9140625 4.3710938 L 8.4375 3.4765625 C 8.1765 3.3175625 7.8970469 3.2319375 7.6230469 3.2109375 z M 6.0390625 4.453125 C 6.0180625 4.567125 6 4.6816875 6 4.8046875 L 6 25.308594 C 6 25.394594 6.0172969 25.474641 6.0292969 25.556641 L 16.585938 15 L 6.0390625 4.453125 z M 22.4375 11.976562 L 19.414062 15 L 22.384766 17.970703 C 23.958766 17.016703 25.048922 16.35425 25.169922 16.28125 C 25.704922 15.95425 26.007047 15.460875 25.998047 14.921875 C 25.990047 14.392875 25.687828 13.919906 25.173828 13.628906 C 25.058828 13.562906 23.9835 12.913563 22.4375 11.976562 z M 18 16.414062 L 7.6542969 26.759766 C 7.8552969 26.724766 8.0560469 26.664828 8.2480469 26.548828 C 8.5140469 26.386828 15.7 22.027062 20.625 19.039062 L 18 16.414062 z"></path>
                    </svg>
                    Download on Google Play
                  </button>
                  <button className="home-main-btn2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                    >
                      <path d="M 16.125 1 C 14.972 1.067 13.648328 1.7093438 12.861328 2.5273438 C 12.150328 3.2713438 11.589359 4.3763125 11.818359 5.4453125 C 13.071359 5.4783125 14.329031 4.8193281 15.082031 3.9863281 C 15.785031 3.2073281 16.318 2.12 16.125 1 z M 16.193359 5.4433594 C 14.384359 5.4433594 13.628 6.5546875 12.375 6.5546875 C 11.086 6.5546875 9.9076562 5.5136719 8.3476562 5.5136719 C 6.2256562 5.5146719 3 7.4803281 3 12.111328 C 3 16.324328 6.8176563 21 8.9726562 21 C 10.281656 21.013 10.599 20.176969 12.375 20.167969 C 14.153 20.154969 14.536656 21.011 15.847656 21 C 17.323656 20.989 18.476359 19.367031 19.318359 18.082031 C 19.922359 17.162031 20.170672 16.692344 20.638672 15.652344 C 17.165672 14.772344 16.474672 9.1716719 20.638672 8.0136719 C 19.852672 6.6726719 17.558359 5.4433594 16.193359 5.4433594 z"></path>
                    </svg>
                    Download on App Store
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Community />
      <Things />
      <Number />
    </>
  );
}
