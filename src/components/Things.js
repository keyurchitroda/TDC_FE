"use client";

import React from "react";
import "./css/Things.css";
const img1 = "/images/Things/pointing-down.png";
const img2 = "/images/Things/events.webp";
const img3 = "/images/Things/discussion-1.webp";
const img4 = "/images/Things/discussion-2.webp";
const img5 = "/images/Things/discussion-3.webp";
const img6 = "/images/Things/network.webp";

export default function Things() {
  return (
    <div>
      <div className="container things-main">
        <h1 className="things-main-h1">
          Things you can do on bluelearn{" "}
          <img
            src={img1}
            alt=""
            height={50}
            width={50}
            className="downside-img"
          />
        </h1>
        <div className="things-main-box1">
          <article className="things-box1-article">
            <h2 className="box1-main-heading">
              <span className="box1-main-heading-span">Learn </span>
              by doing and taking inspiration from others
            </h2>
            <p className="box1-main-para">
              Talk to people about design, marketing, web3, and a lot more!
              <br />
              <br />
              Upskill by participating in hackathons, live events, and speaker
              sessions.
            </p>
          </article>
          <div>
            <img src={img2} alt="" className="box1-img"></img>
          </div>
        </div>

        <div className="things-main-box2">
          <article className="things-box2-article">
            <h2 className="box2-main-heading">
              <span className="box2-main-heading-span">Learn </span>
              your next paycheck
            </h2>
            <p className="box2-main-para">
              Find the best gigs & internships from across 50+ niches to grow in
              your career.
              <br />
              <br />
              Are you hiring? Find talent.
            </p>
          </article>
          <div className="box2-main-cards">
            <div className="box2-cards">
              <img src={img5} alt="" className="box2-card1"></img>
              <img src={img4} alt="" className="box2-card2"></img>
              <img src={img3} alt="" className="box2-card3"></img>
            </div>
          </div>
        </div>

        <div className="things-main-box3">
          <article className="things-box3-article">
            <h2 className="box3-main-heading">
              <span className="box3-main-heading-span">Network </span>
              with smart people
            </h2>
            <p className="box3-main-para">
              Great things happen when great people come together. It’s magic!
              <br />
              <br />
              Connect with a diverse community of creative minds to network,
              share ideas, and gain valuable insights into your craft.{" "}
            </p>
          </article>
          <div>
            <img src={img6} alt="" className="box3-img"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
