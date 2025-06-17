import React from "react";
import "./Board.css";

function Board() {
  return (
    <>
      <div className="container py-5">
        <div className="head d-flex flex-column align-items-center text-center">
          <p className="text-secondary">Best Motherhood Experience</p>
          <h2 className="main">
            How <span className="first">Baby<span className="second">Whisper</span></span> Works ?
          </h2>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center text-center py-5 small   ">
          <div className="col">
            <div className="card shadow rounded-4 position-relative p-3">
              <div
                className="position-absolute top-0 start-50 translate-middle rounded-circle main bg d-flex align-items-center justify-content-center"
                style={{ width: "35px", height: "35px", fontWeight: "bold" }}
              >
                1
              </div>
              <div className="card-body mt-4 main">
                <h5 className="card-title h6">Registration and Audio Upload</h5>
                <p className="card-text">
                  The user logs into the website and uploads an audio recording
                  of the infant's cry.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card shadow rounded-4 position-relative p-3">
              <div
                className="position-absolute top-0 start-50 translate-middle rounded-circle main bg d-flex align-items-center justify-content-center"
                style={{ width: "35px", height: "35px", fontWeight: "bold" }}
              >
                2
              </div>
              <div className="card-body mt-4 main">
                <h5 className="card-title h6">Identifying the Possible Cause of Crying</h5>
                <p className="card-text">
                  AI identifies the potential cause of crying, such as hunger,
                  fatigue, or discomfort.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card shadow rounded-4 position-relative p-3">
              <div
                className="position-absolute top-0 start-50 translate-middle rounded-circle main bg d-flex align-items-center justify-content-center"
                style={{ width: "35px", height: "35px", fontWeight: "bold" }}
              >
                3
              </div>
              <div className="card-body mt-4 main">
                <h5 className="card-title h6">Providing Recommendations and Tips</h5>
                <p className="card-text">
                  Personalized tips and recommendations are provided to help
                  parents manage the crying based on the identified cause
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card shadow rounded-4 position-relative p-3">
              <div
                className="position-absolute top-0 start-50 translate-middle rounded-circle main bg d-flex align-items-center justify-content-center"
                style={{ width: "35px", height: "35px", fontWeight: "bold" }}
              >
                4
              </div>
              <div className="card-body mt-4 main">
                <h5 className="card-title h6">AI Audio Analysis</h5>
                <p className="card-text ">
                  The audio is analyzed using advanced AI algorithms that
                  identify different crying patterns.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card shadow rounded-4 position-relative p-3">
              <div
                className="position-absolute top-0 start-50 translate-middle rounded-circle main bg d-flex align-items-center justify-content-center"
                style={{ width: "35px", height: "35px", fontWeight: "bold" }}
              >
                5
              </div>
              <div className="card-body mt-4 main">
                <h5 className="card-title h6">Monitoring Progress and Data Analysis</h5>
                <p className="card-text">
                  Users can track the infant's progress and analyze data over
                  time to improve their caregiving response.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Board;

