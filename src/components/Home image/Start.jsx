import React from "react";
import "./Start.css";
import Microphone from '../../assets/Microphone.png'

function Start() {
  return (
    <div className="start-wrapper">
      <div className="home-img">
        <div className="container text-white text-center">
          <div className="row justify-content-center align-items-center min-vh-100">
            <div className="col-12 col-md-10 col-lg-8 content">
              <p className="fs-1 fs-md-1">Understand Your Baby's</p>
              <p className="fs-1 fs-md-1 pb-2">Needs Instantly with</p>
              <h1 className="display-1 display-md-1 py-3">BabyWhisper</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Start;
