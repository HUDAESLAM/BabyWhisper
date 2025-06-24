import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CryFeedBack.css";
import { IoStarSharp } from "react-icons/io5";

export default function CryFeedBack() {
  const navigate = useNavigate();

  const [rating, setRating] = useState(() => parseInt(localStorage.getItem("userRating")) || 0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(() => {
    const submittedAt = parseInt(localStorage.getItem("submittedAt"));
    const now = Date.now();

    if (submittedAt && now - submittedAt > 86400000) {
      localStorage.removeItem("submitted");
      localStorage.removeItem("userRating");
      localStorage.removeItem("submittedAt");
      return false;
    }

    return localStorage.getItem("submitted") === "true";
  });

  const [audioDuration, setAudioDuration] = useState(null);
  const [error, setError] = useState("");

  // 🟣 تحقق من الصوت الفاضي
  useEffect(() => {
    const audioPath = localStorage.getItem("lastAudio");
    if (audioPath) {
      const audio = new Audio(audioPath);
      audio.addEventListener("loadedmetadata", () => {
        setAudioDuration(audio.duration);
        if (audio.duration === 0) {
          setError("The uploaded audio is empty. Please try again.");
        }
      });
    }
  }, []);

  const handleSubmit = () => {
    setError("");

    if (audioDuration === 0) {
      setError("The uploaded audio is empty. Please try again.");
      return;
    }

    if (rating > 0 && !submitted) {
      localStorage.setItem("userRating", rating);
      localStorage.setItem("submitted", "true");
      localStorage.setItem("submittedAt", Date.now().toString());
      setSubmitted(true);

      setTimeout(() => {
        navigate("/mainCry");
      }, 10000);
    } else if (submitted) {
      navigate("/mainCry");
    } else {
      setError("Please select a rating before submitting.");
    }
  };

  const handleReRate = () => {
    localStorage.removeItem("userRating");
    localStorage.removeItem("submitted");
    localStorage.removeItem("submittedAt");
    setRating(0);
    setHover(0);
    setSubmitted(false);
    setError("");
  };

  return (
    <div className="container-fluid">
      <div className="rate-main-body border border-secondary border-3 rounded-5 px-5">
        <div className="cry-rate d-flex flex-column justify-content-center align-items-center mt-5">
          <div className="rate-text text-center">
            <p>Please Rate your experience</p>
            <p style={{ opacity: "0.5" }}>Please Rate your experience</p>
            <p style={{ opacity: "0.2" }}>Please Rate your experience</p>
          </div>

          {/* النجوم */}
          <div className="rate-stars mt-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <IoStarSharp
                key={star}
                className="fs-2 m-1"
                style={{
                  cursor: submitted ? "not-allowed" : "pointer",
                  color: (hover || rating) >= star ? "gold" : "lightgray",
                  pointerEvents: submitted ? "none" : "auto",
                  opacity: submitted ? 0.6 : 1,
                }}
                onClick={() => !submitted && setRating(star)}
                onMouseEnter={() => !submitted && setHover(star)}
                onMouseLeave={() => !submitted && setHover(0)}
              />
            ))}
          </div>

          {/* رسالة الخطأ */}
          {error && <p className="text-danger mt-2">{error}</p>}

          {/* زر التقييم */}
          <div className="rate-button">
            <button
              className={`btn rounded-pill px-4 py-2 my-3 border border-2 ${
                submitted ? "btn-success text-white" : ""
              }`}
              onClick={handleSubmit}
            >
              {submitted ? "Done" : "Rate"}
            </button>

            {/* زر Re-rate */}
            {submitted && (
              <button
                className="btn rounded-pill px-4 py-2 my-3 border border-2 text-white"
                onClick={handleReRate}
              >
                Re-rate
              </button>
            )}
          </div>

          {/* زر التخطي */}
          <div className="skip-rate d-flex align-self-end">
            <button className="btn d-flex flex-row pe-3" onClick={() => navigate("/mainCry")}>
              <p>skip</p>
              <i className="fa-solid fa-arrow-right pt-2 ps-1"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
