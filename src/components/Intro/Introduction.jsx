import React from "react";
import "./Introduction";
import Cry from "../../assets/Cry.png";
import "./Introduction.css";
import { FaArrowRight } from "react-icons/fa";
import { FaMicrophoneAlt } from "react-icons/fa";
import { LuBaby } from "react-icons/lu";
import { GiSoundWaves } from "react-icons/gi";
import { FaBabyCarriage } from "react-icons/fa";

function Intro() {
  return (
    <>
      <div className="container py-5 ">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 mb-4">
            <h2 className="fs-1">FOR</h2>
            <h3 className="fs-2">NEW MOMS Experience it FOR.</h3>
            <p className="fw-bold">
              "To understand your BABY more." <FaBabyCarriage />
            </p>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="mb-4">
              <h2 className="head">
                <span className="span fw-bold">3</span> million
              </h2>
              <p>
                It is used by more than <span className="fw-bold">3</span>{" "}
                million people worldwide.
              </p>
              <span>Our website is for new parents and caregivers.</span>
            </div>

            <div className="py-3">
              <h2 className="head">
                <span className="span fw-bold">6</span> months <LuBaby />
              </h2>
              <p>
                They are most effective for newborns up to{" "}
                <span className="fw-bold">6</span> months and until{" "}
                <span className="fw-bold">12</span>
                {""} months of age.
              </p>
            </div>

            <div className="py-3">
              <h2 className="span fw-bold">
                93% <GiSoundWaves />
              </h2>
              <p>
                The accuracy rates of baby cry analysis websites which use AI to
                identify reasons for crying with over{" "}
                <span className="fw-bold">90%</span> accuracy.
              </p>
            </div>
          </div>
        </div>

        <div className="row py-5 align-items-center my-button">
          <div className="col-lg-6 col-md-6 mb-4 d-flex flex-column align-items-center text-center click-p">
            <button className="click fs-4 mb-3 rounded-pill">
              <FaMicrophoneAlt /> Try Now <FaArrowRight />
            </button>
            <p>Record your baby's crying</p>
          </div>

          <div className="col-lg-6 col-md-6 d-flex justify-content-center align-items-center image">
            <img
              src={Cry}
              alt="crybaby"
              className="shadow rounded-5 img-fluid"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
