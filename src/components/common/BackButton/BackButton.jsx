import React from "react";
import "./BackButton.css";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function BackButton({ to = -1 }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (typeof to === "number") {
      navigate(to); // go back in history
    } else {
      navigate(to); // go to specific path
    }
  };

  return (
    <>
      <div className="main-button-body d-flex  justify-content-start ms-5 ">
        <button
          className="btn  mb-4"
          //    onClick={onClick}
          onClick={handleClick}
        >
          <div className="button-body d-flex flex-row justify-content-center align-items-center p-1 ">
            <FaArrowLeft className="mb-2 me-1" />
            <p className="fs-5">back</p>
          </div>
        </button>
      </div>
    </>
  );
}
