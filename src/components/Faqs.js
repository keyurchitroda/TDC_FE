"use client";

import React, { useEffect } from "react";
import "./css/Faqs.css";

export default function Faqs() {
  return (
    <div>
      <div className="faqs-main-div">
        <div className="container faqs-second-div">
          <h1 className="faqs-main-h1">FAQs</h1>
          <div className="accordion faqs-main" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="faqs-1 accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  What exactly is bluelearn?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Bluelearn is a community where you can learn skills, network
                  with smart people, and find work. <br />
                  <br /> Download the bluelearn app to find all these
                  opportunities.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="faqs-2 accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Do I have to pay for something?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  No. Bluelearn is 100% free.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="faqs-3 accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  How to find work on bluelearn?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Download the app and set up your profile. You only need to
                  upload your proof of work to apply to gigs and internships on
                  bluelearn. Your proof of work can be your past projects, work
                  portfolio, or links to relevant social channels.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="faqs-4 accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  How to hire?
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Hiring through bluelearn is simple. <br />
                  <br /> Step 1: Sign up on the app
                  <br />
                  Step 2: Post a gig
                  <br />
                  Step 3: Browse through profiles of the applicants
                  <br />
                  Step 4: Hire the best candidate!If you prefer website, post a
                  job from here.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
