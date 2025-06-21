import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaCalendarAlt,
  FaRobot,
  FaCog,
  FaTable,
  FaBars,
  FaTimes,
  FaRegSadCry,
} from "react-icons/fa";
import { MdSource } from "react-icons/md";

const Sidebar = () => {
  const [active, setActive] = useState("Dashboard");
  const [expanded, setExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth < 768;
      setIsMobile(isNowMobile);
      if (!isNowMobile) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    { name: "Dashboard", icon: <FaTable />, path: "/dashboard" },
    { name: "About us", icon: <FaInfoCircle />, path: "/about" },
    { name: "Sources", icon: <MdSource />, path: "/resources" },
    { name: "Schedule", icon: <FaCalendarAlt />, path: "/schedule" },
    { name: "Chatbot", icon: <FaRobot />, path: "/chatbot" },
    { name: "Cry Detection", icon: <FaRegSadCry />, path: "/maincry" },
    { name: "Home", icon: <FaHome />, path: "/home" },
    { name: "Settings", icon: <FaCog />, path: "/settings" },
  ];

  const newsCategories = [
    { name: "General", color: "warning" },
    { name: "Health", color: "success" },
    { name: "Research", color: "primary" },
    { name: "Articles", color: "secondary" },
    { name: "Events", color: "danger" },
  ];

  const handleNavigate = (name, path) => {
    setActive(name);
    navigate(path);
    if (isMobile) setMobileOpen(false);
  };

  return (
    <>
{isMobile && (
  <button
    className="btn btn-primary rounded-circle position-fixed top-0 start-0 m-3 d-md-none"
    style={{
      zIndex: 1060,
      width: "40px",
      height: "40px",
      display: mobileOpen ? "none" : "flex", // 👈 لما السايدبار يفتح يخفي الزر
      alignItems: "center",
      justifyContent: "center",
    }}
    onClick={() => setMobileOpen(true)}
    title="Open Menu"
  >
    <FaBars />
  </button>
)}



      {/* Overlay */}
      {isMobile && mobileOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
          style={{ zIndex: 1040 }}
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* السايدبار */}
      <div
        className="bg-white shadow position-fixed top-0"
        style={{
          left: isMobile ? (mobileOpen ? "0" : "-250px") : "0",
          width: expanded ? 250 : 80,
          height: "100vh",
          transition: "left 0.3s ease, width 0.3s ease",
          zIndex: 1051,
          overflow: "hidden",
        }}
      >
        {/* زر إغلاق في الموبايل */}
        {isMobile && (
          <button
            className="btn btn-outline-danger rounded-circle position-absolute top-0 end-0 m-2"
            style={{
              width: "35px",
              height: "35px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => setMobileOpen(false)}
            title="Close"
          >
            <FaTimes />
          </button>
        )}

        {/* زر التوسيع / التصغير (يظهر دايمًا) */}
        <div className="text-end mt-3 mb-3 pe-2">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              className="btn s-5 btn-outline-secondary btn-sm rounded-circle"
              style={{
                width: "35px",
                height: "35px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => setExpanded((prev) => !prev)}
              title={expanded ? "Collapse" : "Expand"}
            >
              <FaBars />
            </button>
          </div>
        </div>

        {/* الروابط */}
        <div className="px-3">
          {links.map((link) => (
            <button
              key={link.name}
              className={`btn w-100 text-start mb-2 d-flex align-items-center ${
                active === link.name ? "btn-outline-primary" : "btn-light"
              }`}
              onClick={() => handleNavigate(link.name, link.path)}
              title={!expanded && !isMobile ? link.name : undefined}
            >
              <span className="me-2">{link.icon}</span>
              {expanded && <span>{link.name}</span>}
            </button>
          ))}
        </div>

        {/* الأخبار */}
        {expanded && !isMobile && (
          <div className="px-3 mt-auto">
            <h6 className="text-muted">NEWS</h6>
            <ul className="list-unstyled">
              {newsCategories.map((item) => (
                <li key={item.name} className="d-flex align-items-center mb-2">
                  <span
                    className={`badge bg-${item.color} rounded-circle me-2`}
                    style={{ width: "10px", height: "10px" }}
                  ></span>
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
