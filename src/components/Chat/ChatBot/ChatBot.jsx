import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import chatIcon from "../../../assets/ChatIcon.png";
import "./ChatBot.css";
import BackButton from "../../common/BackButton/BackButton";
import Sidebar from "../../SideBar/Sidebar";
import NavUser from "../../UserNavbar/NavUser";
import { FaArrowUp } from "react-icons/fa";

export default function ChatBot() {
  const [categories, setCategories] = useState([]); // ["Child", "Mother"]
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [subcategories, setSubcategories] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const [questions, setQuestions] = useState([]);
  // const [selectedQuestions, setSelectedQuestions] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://localhost:5001/get_categories");
        const categories = res.data?.categories;

        if (Array.isArray(categories)) {
          setCategories(categories);
        } else {
          console.error("Unexpected format for categories:", res.data);
          setCategories([]);
        }
      } catch (error) {
        console.error("Error fetching categories:", error.message);
        setCategories([]);
      }
    };
    fetchCategories();
  }, [selectedCategory]);

  useEffect(() => {
    const fetchSubcategories = async () => {
      if (!selectedCategory) return;

      try {
        const res = await axios.get(`http://localhost:5001/get_subcategories`, {
          params: { category: selectedCategory },
        });

        const subs = res.data?.subcategories;
        if (Array.isArray(subs)) {
          setSubcategories(subs);
        } else {
          console.error("Unexpected format for subcategories:", res.data);
          setSubcategories([]);
        }
      } catch (error) {
        console.error("Error fetching subcategories:", error.message);
        setSubcategories([]);
      }
    };
    fetchSubcategories();
  }, [selectedCategory]);

  useEffect(() => {
    const fetchQuestions = async () => {
      if (!selectedCategory || !selectedSubcategory) return;

      try {
        const res = await axios.post(
          `http://localhost:5001/get_questions_by_category`,
          {
            category: selectedCategory,
            subcategory: selectedSubcategory,
          }
        );

        const questionsData = res.data?.questions;
        if (Array.isArray(questionsData)) {
          setQuestions(questionsData);
        } else {
          console.error("Unexpected format for questions:", res.data);
          setQuestions([]);
        }
      } catch (error) {
        console.error("Error fetching questions:", error.message);
        setQuestions([]);
      }
    };

    fetchQuestions();
  }, [selectedSubcategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    console.log("Selected category:", category);
  };

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  const handleQuestionClick = async (question) => {
    try {
      const res = await axios.post("http://localhost:5001/ask_question", {
        question,
      });
      const answer =
        res.data?.response || "Sorry, I don't have an answer right now.";
      const chatHistory = [
        { sender: "user", text: question },
        { sender: "bot", text: answer },
      ];
      localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
      navigate("/chatbox");
    } catch (err) {
      console.error("Error fetching answer:", err.message);
      const errorHistory = [
        { sender: "user", text: question },
        { sender: "bot", text: "Error fetching response." },
      ];
      localStorage.setItem("chatHistory", JSON.stringify(errorHistory));
      navigate("/chatbox");
    }
  };

  const handleBack = () => {
    if (selectedSubcategory) {
      // Go back to subcategories
      setSelectedSubcategory(null);
      setQuestions([]);
    } else if (selectedCategory) {
      // Go back to categories
      setSelectedCategory(null);
      setSubcategories([]);
    }
  };

  return (
    <>
        <Sidebar/>
        <NavUser/>
      <div className="Container mt-5 pt-3 chat-bg">
  <div className="main-chatbot mt-4 d-flex flex-column align-items-center justify-content-center">
    <h2 className="text-center">Chatbot</h2>

    <div className="chat-header d-flex flex-column flex-md-row align-items-center justify-content-center mt-3 text-center gap-2">
      <p className="mb-0 ms-5">What Can I help With</p>
      <img src={chatIcon} alt="ChatBot icon" className="ms-md-3" />
    </div>

    <div className="chat-labels w-100 mt-5 d-flex justify-content-center flex-wrap px-3 gap-2">
      {!selectedCategory ? (
        <>
          {categories.map((cat) => (
            <button
              className="btn btn-secondary px-3 mx-2 my-2"
              key={cat}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </>
      ) : !selectedSubcategory ? (
        <>
          {subcategories.length > 0 ? (
            subcategories.map((sub) => (
              <button
                className="btn btn-secondary px-3 mx-2 my-2"
                key={sub}
                onClick={() => handleSubcategoryClick(sub)}
              >
                {sub}
              </button>
            ))
          ) : (
            <p>No subcategories found.</p>
          )}
        </>
      ) : (
        <>
          {questions.length > 0 ? (
            questions.map((q, index) => (
              <button
                key={index}
                className="btn btn-secondary px-3 mx-2 my-2"
                onClick={() => handleQuestionClick(q)}
              >
                {q}
              </button>
            ))
          ) : (
            <p>No questions found.</p>
          )}
        </>
      )}
    </div>

    <div className="chat-box border border-1 border-dark rounded-5 d-flex flex-column flex-sm-row justify-content-between align-items-center px-4  w-md-75 gap-3">
      <p className="mb-0 text-center text-sm-start">
        Select question To Answer you . . . .
      </p>
      <button
        type="button"
        className="btn btn-sm rounded-circle"
      >
        <FaArrowUp />
      </button>
    </div>
  </div>

  <div className="button-back mt-4 d-flex justify-content-center">
    {(selectedCategory || selectedSubcategory) && (
      <BackButton onClick={handleBack} />
    )}
  </div>
</div>

    </>
  );
}
