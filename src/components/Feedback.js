"use client";

import React, { useEffect } from "react";
import "./css/Feedback.css";
const db = "/images/Feedback/double-quotes.svg";
const dbf = "/images/Feedback/double-quotes-finish.svg";
const img1 = "/images/Feedback/ayush-mittal.webp";
const img2 = "/images/Feedback/mehul-kapadia.webp";
const img3 = "/images/Feedback/shravani-tembare.webp";
const img4 = "/images/Feedback/faizan-najeeb.webp";
const img5 = "/images/Feedback/samuel.webp";
const img6 = "/images/Feedback/purnima-borana.webp";
const img7 = "/images/Feedback/josiah-aaron.webp";
const img8 = "/images/Feedback/sneha-biswas.webp";
const img9 = "/images/Feedback/hasita-meka.webp";
const img10 = "/images/Feedback/ashish-thomas.webp";
const img11 = "/images/Feedback/mahaprasad-mohanty.webp";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function Feedback() {
  return (
    <div>
      <div className="feedback-main">
        <h3 className="feedback-main-h3">
          Don't take our word for it, see what the community is saying
        </h3>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="col-lg-3">
              <div className="box1">
                <img src={img1} alt=""></img>
                <p className="box1-p">
                  <img src={db} alt="" width={20} height={20} /> I met CTO for
                  my startup in this community. He’s still working with us.
                  Couldn’t ask for a better person. Network on the BL Community,
                  if done right, you can find a motivated team there.{" "}
                  <img src={dbf} alt="" width={20} height={20} />
                </p>
                <h5 className="box1-h5">Ayush Mittal</h5>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="box2">
                <img src={img2} alt=""></img>
                <p className="box1-p">
                  <img src={db} alt="" width={20} height={20} /> We got our
                  first lead through bluelearn! Right after my pitch in the
                  bluelearn pitch tank competition, I got my first lead. Thanks
                  a lot for this crazy community you guys have built.{" "}
                  <img src={dbf} alt="" width={20} height={20} />
                </p>
                <h5 className="box1-h5">Mehul Kapadia</h5>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="box3">
                <img src={img3} alt=""></img>
                <p className="box1-p">
                  <img src={db} alt="" width={20} height={20} /> At BlueLearn
                  study streak club, I study with online friends and get things
                  done. Here the Pomodoro sessions have help me a lot. Also, the
                  lead board and stats keep me going in order to maintain my
                  streak and position.{" "}
                  <img src={dbf} alt="" width={20} height={20} />
                </p>
                <h5 className="box1-h5">Shravani Tembare</h5>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="box4">
                <img src={img4} alt=""></img>
                <p className="box1-p">
                  <img src={db} alt="" width={20} height={20} /> Bluelearn Quiz
                  Club is the perfect place to nurture quizzing and improve your
                  analytical skills. Helped me a lot to improve myself in
                  quizzing and increased my urge to gather information.{" "}
                  <img src={dbf} alt="" width={20} height={20} />
                </p>
                <h5 className="box1-h5">Faizan Najeeb</h5>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="col-lg-4">
              <div className="box5">
                <img src={img5} alt=""></img>
                <p className="box1-p">
                  <img src={db} alt="" width={20} height={20} /> Bluelearn is
                  helping thousands of students get jobs, or internships that no
                  other platform is doing.I have applied a hundred of jobs on
                  other platforms but i did not even get any respond. But
                  Bluelearn makes me feel home. It connects. It inspires. It
                  helps other to grows.{" "}
                  <img src={dbf} alt="" width={20} height={20} />
                </p>
                <h5 className="box1-h5">Samuel</h5>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box6">
                <img src={img6} alt=""></img>
                <p className="box1-p">
                  <img src={db} alt="" width={20} height={20} /> At bluelearn I
                  learnt how to be consistent and how to interact with others. I
                  also learnt various things related to freelancing.{" "}
                  <img src={dbf} alt="" width={20} height={20} />
                </p>
                <h5 className="box1-h5">Purnima Borana</h5>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box7">
                <img src={img1} alt=""></img>
                <p className="box1-p">
                  <img src={db} alt="" width={20} height={20} /> Hey, I've been
                  using Bluelearn and it has been amazing. I was able to find a
                  nice video editing internship at a good company so that I
                  could grow in my field of work and prosper. I couldn't have
                  done it without Bluelearn.{" "}
                  <img src={dbf} alt="" width={20} height={20} />
                </p>
                <h5 className="box1-h5">Josiah Aaron</h5>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="col-lg-3">
              <div className="box8">
                <img src={img8} alt=""></img>
                <p className="box1-p">
                  <img src={db} alt="" width={20} height={20} /> I always wanted
                  to learn UI design but due to a lack of motivation, I was
                  constantly procrastinating. But thanks to the team Bluelearn
                  for organising this Designathon event where we had to form a
                  team and solve a problem with our design skills.{" "}
                  <img src={dbf} alt="" width={20} height={20} />
                </p>
                <h5 className="box1-h5">Sneha Biswas</h5>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="box9">
                <img src={img9} alt=""></img>
                <p className="box1-p">
                  <img src={db} alt="" width={20} height={20} /> It was a great
                  experience to be a part of ideathon conducted by Bluelearn. We
                  gained a good amount of knowledge about blockchain. Thankful
                  to Bluelearn for conducting such events.{" "}
                  <img src={dbf} alt="" width={20} height={20} />
                </p>
                <h5 className="box1-h5">Hasita Meka</h5>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="box10">
                <img src={img10} alt=""></img>
                <p className="box1-p">
                  <img src={db} alt="" width={20} height={20} /> Bluelearn is
                  really a lovely community. I’ve learned many skills and
                  networked with many people because of the community. Keep up
                  the good work. <img src={dbf} alt="" width={20} height={20} />
                </p>
                <h5 className="box1-h5">Ashish Thomas</h5>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="box11">
                <img src={img11} alt=""></img>
                <p className="box1-p">
                  <img src={db} alt="" width={20} height={20} /> Studying
                  doesn't have to be a lonely activity. The study streak club
                  was a great example of that. Studying with friends gives the
                  motivation that nothing else can.{" "}
                  <img src={dbf} alt="" width={20} height={20} />
                </p>
                <h5 className="box1-h5">Mahaprasad Mohanty</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
