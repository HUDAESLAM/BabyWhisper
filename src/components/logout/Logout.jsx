import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  console.log("Token after logout:", localStorage.getItem("token")); 
  Swal.fire({
    title: "Logged out!",
    text: "You have been successfully logged out.",
    icon: "success",
    confirmButtonText: "OK",
    draggable: true,
  }).then(() => {
    navigate("/login");
  });
}, [navigate]);


  return null; 
}
