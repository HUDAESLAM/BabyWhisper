import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import uploadImg from "../../../assets/UploadIcon.png";
// import socket from "../Sockets/sockets";
import "./PageUpload.css";
import CryHeader from "../cryHeader/Cryheader";
import BackButton from "../../common/BackButton/BackButton";

export default function UploadPage() {
  const [audioFile, setAudioFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  // Upload the file whenever it changes
  useEffect(() => {
    const uploadAudio = async () => {
      if (!audioFile) return;

      const formData = new FormData();
      formData.append("file", audioFile);

      try {
  const token = localStorage.getItem("token");

  const response = await axios.post(
    "http://localhost:8000/api/records/uploadRecords",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
      onUploadProgress: (progressEvent) => {
        const percentage = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        setProgress(percentage);
      },
    }
  );

  console.log("Upload complete", response.data);
  const responseData = response.data;
  navigate("/cryResult", { state: { responseData } });
} catch (err) {
  console.error("Upload failed:", err);
}
      setProgress(0); // Reset progress after upload
    };

    uploadAudio();
  }, [audioFile, navigate]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("audio/")) {
      setAudioFile(file);
    } else {
      alert("Please upload a valid audio file (.wav, .webm, etc.)");
      setAudioFile(null);
    }
  };


  return (
    <>
      <div className="container-fluid">
        <div className="main-content mt-2 d-flex  flex-column  align-items-center justify-content-center">
          <CryHeader />

          <div className="upload-rectangle border border-5 rounded-5  d-flex flex-column  align-items-center justify-content-center  col-8 ">
            <img
              src={uploadImg}
              alt="upload icon here"
              className="border border-1 rounded-circle ms-2 mb-2"
            />
            <label className="rounded-pill shadow border border-0 mb-2 text-center pt-2">
              Upload
              <input
                type="file"
                accept="audio/*"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </label>
            <p>Upload Audio</p>
          </div>
          <div
            className="progress w-50 my-4 bg-secondary"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <progress
              value={progress}
              className="bg-secondary"
              max="100"
              style={{ width: "100%", height: "100%", border: "0" }}
            >
              {" "}
              {progress}%
            </progress>
          </div>

          <div className="align-self-start  ">
            <BackButton to="/maincry" />
          </div>
        </div>
      </div>
    </>
  );
}
