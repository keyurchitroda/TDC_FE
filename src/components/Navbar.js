"use client";

import React from "react";
import "./css/Navbar.css";

export default function Navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">
            <span className="nav-c-name-span">Blue</span>Learn
          </a>
          <button
            className="navbar-toggler nav-main-btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-main-menu">
              <li className="nav-item">
                <a className="nav-link nav-menu1" aria-current="page" href="/">
                  Hire talent
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-menu2" href="/">
                  Find work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-menu3" href="/">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-menu4" href="/">
                  Community
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-menu5" href="/">
                  Events
                </a>
              </li>
            </ul>
            <button type="button" className="btn btn-primary nav-btn">
              Sign up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
