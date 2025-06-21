import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./CryUpload.css";
import Mic from "../microphone/Mic";
import CryHeader from "../cryHeader/Cryheader";

export default function RecordCry() {
  const navigate = useNavigate();
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [audioChunks, setAudioChunks] = useState([]);
  const [shouldUpload, setShouldUpload] = useState(false);
  const [progress, setProgress] = useState(0);

  const startRecording = async () => {
    if (!navigator.mediaDevices || !window.MediaRecorder) {
      alert("Your browser does not support audio recording.");
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      const chunks = [];

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data);
        }
      };

      recorder.onstop = () => {
        setAudioChunks(chunks);
        setShouldUpload(true);
        stream.getTracks().forEach((track) => track.stop());
      };

      recorder.start();
      setMediaRecorder(recorder);
      setIsRecording(true);
      setProgress(0);
    } catch (err) {
      alert("Microphone access is required.");
      console.error(err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state === "recording") {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  useEffect(() => {
    if (!shouldUpload) return;

    const uploadAudio = async () => {
      if (!audioChunks || audioChunks.length === 0) {
        alert("Recording is empty. Please try again.");
        return;
      }

      const blob = new Blob(audioChunks, { type: "audio/wav" });

      if (!blob || blob.size === 0) {
        alert("Recording is empty. Please try again.");
        return;
      }

      if (blob.size < 5000) {
        alert("Recording is too short or silent.");
        return;
      }

      const formData = new FormData();
      formData.append("file", blob, "recorded_audio.wav");

      try {
        const response = await axios.post(
          "http://localhost:8000/api/records/uploadRecords",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6Imh1ZGExMTExQGdtYWlsLmNvbSIsImlhdCI6MTc1MDI4MTQzNywiZXhwIjoxNzU4MDU3NDM3fQ.YROj5DdnjKIERJ1SKg6-0ShcmbetqoT7WzbUr25DQj8`,
            },
            onUploadProgress: (progressEvent) => {
              const percent = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              );
              setProgress(percent);
            },
          }
        );

        navigate("/cryResult", { state: { responseData: response.data } });
      } catch (error) {
        console.error("Upload failed:", error);
        alert("Prediction failed. Please try again.");
      } finally {
        setShouldUpload(false);
        setAudioChunks([]);
        setProgress(0);
      }
    };

    uploadAudio();
  }, [audioChunks, shouldUpload, navigate]);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-white to-purple-100 flex flex-col items-center justify-center text-gray-800 font-sans">
        <main className="text-center mt-20 px-4">
          <CryHeader />

          <Mic />

          <div className="tap-record mt-3 mb-3">
            {/* <p className="tap-text">{isRecording ? "Recording..." : "Tap to record"}</p> */}

            {!isRecording ? (
              <button className="btn mt-3 " onClick={startRecording}>
                Tap to record
              </button>
            ) : (
              <button className="btn mt-3" onClick={stopRecording}>
                Tap to stop
              </button>
            )}
          </div>

          <div className=" d-flex justify-content-center align-items-center mb-5">
            <div
              className="progress w-50 "
              role="progressbar"
              aria-label="Basic example"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar" style={{ width: "0%" }}>
                {progress > 0 && `${progress}%`}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
