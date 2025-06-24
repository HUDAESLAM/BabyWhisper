import React from "react";
import CryIcon from "../../../assets/CryIcon.png";
import "./Cryheader.css";

export default function CryHeader() {
  return (
    <>
        <div className="container d-flex flex-column justify-content-center align-items-center">
        <h2 className="text-center text-2xl font-bold mb-4 p-5 pt-0">
            Easily understand your baby requirements
        </h2>

        <div className="mb-4">
            <img src={CryIcon} alt="baby crying icon" className="mx-auto size mb-2" />
        </div>
      </div>
    </>
  );
}
