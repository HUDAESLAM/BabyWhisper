import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import axios from 'axios';
import chatIcon from "../../../assets/ChatIcon.png";
import BackButton from "../../common/BackButton/BackButton";
import "./ChatBox.css";

export default function ChatBox() {
  const [chatHistory, setChatHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("chatHistory"));
    if (Array.isArray(saved)) {
      setChatHistory(saved);
    } else {
      setChatHistory([]);
    }
  }, []);

  const handleBack = () => {
    navigate("/chatBot");
  };

  return (
    <>
      <div className="Container-fluid">
        <div className="main-chatbox border border-dark rounded my-3 mx-5 d-flex flex-column ">
          <div
            className="chatbox-header d-flex flex-row justify-content-center align-items-center"
            style={{ opacity: 0.5 }}
          >
            <p className="text-cente ">Chatbot</p>
            <img src={chatIcon} alt="chat Icon" className="ms-3" />
          </div>

          <div className="chatbox-box  d-flex flex-column justify-content-center px-5">
            <div>
              {chatHistory.map((msg, index) => (
                <div
                  key={index}
                  className={`m-3 mb-2 d-flex  ${
                    msg.sender === "user"
                      ? "justify-content-end"
                      : "justify-content-start"
                  }`}
                >
                  <div
                    className={`p-2 rounded-3 ${
                      msg.sender === "user"
                        ? "bg-primary text-white"
                        : "bg-secondary --bs-primary-bg-subtle text-white"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="d-flex flex-row justify-content-start align-items-end">
            <div className="mb-2">
              <BackButton onClick={handleBack} />
            </div>

            <div className="chat-message border border-1 border-dark rounded-4 mb-5 d-flex justify-content-between align-items-center px-3 ">
              <p className="pt-2">Got Your Answer Here . . . . </p>
              <button type="button" className="btn btn-sm rounded-circle">
                <i className="fa-solid fa-arrow-up"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
