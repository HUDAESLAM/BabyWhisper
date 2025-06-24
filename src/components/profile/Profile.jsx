import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../SideBar/Sidebar";
import "./Profile.css";
import { useNavigate, useLocation } from "react-router-dom";
import { MdOutlineMailOutline } from "react-icons/md";
import Swal from "sweetalert2";
import NavUser from "../UserNavbar/NavUser";


export default function Profile() {
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState(null);
  const [user, setUser] = useState({});

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

useEffect(() => {
  const fetchUser = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/user/getUserById/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("🔁 Updated user from API:", res.data);
      setUser(res.data);
    } catch (error) {
      setError(error.message);
    }
  };

  fetchUser();
}, [userId, token, location.state?.refresh]);



  const icons = {
    email: <MdOutlineMailOutline className="text-primary" />,
  };

  return (
    <div className="container-fluid chat-bg mt-5">
      <NavUser/>
      <Sidebar />
      <div className="row">
        <div className="col-12 col-md-10 offset-md-2 p-3 d-flex align-items-center justify-content-center">
          <div
            className="bg-transperent p-4 rounded shadow-sm w-100"
            style={{ maxWidth: "1000px" }}
          >
            <div className="d-flex flex-column align-items-center justify-content-center text-center mb-4">
              <img
                src={`${user.profile_picture}?${Date.now()}`}
                alt="Profile"
                className="img-fluid rounded-circle mb-3"
                style={{ maxWidth: "200px" }}
              />

              <h4>{error ? error : user.name}</h4>
            </div>

            <div className="text-center mb-4">
              <h4 className="mb-3">About</h4>
              <p>
                <span className="me-2">{icons.email}</span>
                {user.email}
              </p>
            </div>

            <hr className="my-4" />

            <h4 className="mb-3 text-center">Baby Information</h4>
            {user.babies && user.babies.length > 0 ? (
              user.babies.map((baby, index) => (
                <div key={index} className="mb-4 border rounded p-3 text-center">
                  <p>
                    <strong>Name:</strong> {baby.baby_name}
                  </p>
                  <p>
                    <strong>Age:</strong> {baby.age_in_months} months
                  </p>
                  <p>
                    <strong>Gender:</strong> {baby.gender}
                  </p>
                  <p>
                    <strong>Birth Date:</strong> {baby.birth_date}
                  </p>
                  {baby.medical_conditions && (
                    <p>
                      <strong>Medical Conditions:</strong>{" "}
                      {baby.medical_conditions}
                    </p>
                  )}
                </div>
              ))
            ) : (
              <p>No baby data found.</p>
            )}

            <div className="text-center">
              <button
                className="btn btn-primary"
                onClick={() => navigate("/profileEdit", { state: user })}
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
