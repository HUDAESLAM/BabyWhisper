import React from "react";
import babyIcon from "../../../assets/CryIcon.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./CryResult.css";
import BackButton from "../../common/BackButton/BackButton";
import CryFeedBack from "../CryFeedBack/CryFeedBack";

export default function CryResult() {
  const location = useLocation();
  const navigate = useNavigate();
  const stateData = location.state;
  const responseData = stateData?.responseData || stateData;

  const prediction = responseData?.data?.prediction || responseData?.prediction;
  const suggestion =
    responseData?.data?.suggestion || responseData?.recommendation;

  useEffect(() => {
    if (!prediction || !suggestion) {
      console.warn("No valid prediction/suggestion, redirecting...");
      navigate("/main-cry");
    }
  }, [prediction, suggestion, navigate]);

  if (!prediction || !suggestion) return null;

  console.log("CryResult responseData:", responseData);

  return (
    <>
      <div className="continer-fluid chat-bg">
        <div className="main-content mt-4 d-flex  flex-column  align-items-center justify-content-center">
          <div className="mb-4 mt-3">
            <img
              src={babyIcon}
              alt="baby crying icon"
              className="mx-auto size"
            />
            <h2>Result </h2>
          </div>

          <div className="cry-result d-flex flex-column align-items-center justify-content-center m-5 text-center">
            <p className="prediction">{prediction}</p>
            <div className="suggestion border-top border-bottom p-4  mt-3">
              <p>{suggestion}</p>
            </div>

            <div className=" mt-5 ">
              <CryFeedBack />
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
}
