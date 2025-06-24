import React from "react";
import Mic from "../microphone/Mic";
import UploadButton from "../uploadButtons/Upload";
import { useNavigate } from "react-router-dom";
import "./mainCry.css";
import CryHeader from "../cryHeader/Cryheader";
import NavUser from "../../UserNavbar/NavUser";
import Sidebar from "../../SideBar/Sidebar";

export default function MainCry() {
  const navigate = useNavigate();

  const handleClickUpload = () => {
    navigate("/UploadPage");
  };

  const handleClickRecord = () => {
    navigate("/RecordCry");
  };

  return (
    <>
      <div className="container-fluid mainCry mt-5 pt-5">
        <NavUser/>
        <Sidebar/>
        <div className="d-flex align-items-center justify-content-center flex-column">
          <div>
          <CryHeader />
        </div>

        <div className="tap-record d-flex flex-column justify-content-center align-items-center ">
          <Mic />
          <button onClick={handleClickRecord} className="btn mt-4">
            Tap to record{" "}
          </button>
        </div>

        <div>
          <UploadButton onClick={handleClickUpload} />
        </div>
        </div>
      </div>
    </>
  );
}
