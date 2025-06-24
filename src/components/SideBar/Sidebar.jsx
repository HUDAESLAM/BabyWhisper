import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  FaCalendarAlt,
  FaRobot,
  FaTable,
  FaBars,
  // FaTimes,
  FaRegSadCry,
} from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { TiHomeOutline } from "react-icons/ti";
import { MdSource } from "react-icons/md";
const Sidebar = () => {
  const [active, setActive] = useState("Dashboard");
  const [expanded, setExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
    { name: "Profile", icon: <CgProfile />, path: "/profile" },
    { name: "Dashboard", icon: <FaTable />, path: "/dashboard" },
    { name: "Sources", icon: <MdSource />, path: "/resources" },
    { name: "Schedule", icon: <FaCalendarAlt />, path: "/schedule" },
    { name: "Chatbot", icon: <FaRobot />, path: "/chatbot" },
    { name: "Cry Detection", icon: <FaRegSadCry />, path: "/maincry" },
    { name: "Home", icon: <TiHomeOutline />, path: "/home" },
    { name: "logout", icon: <TbLogout />, path: "/logout" },
  ];

  const handleNavigate = (name, path) => {
    setActive(name);
    navigate(path);
    if (isMobile) setMobileOpen(false);
  };

  return (
    <div>
      {/* ✅ زرار الـ menu الرئيسي يتحكم في الفتح/الغلق
      {isMobile && (
        <button
          className="btn btn-primary rounded-circle position-fixed top-0 start-0 m-3 d-md-none"
          style={{
            zIndex: 1060,
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setExpanded((prev) => !prev)} // ← التحكم في الـ expanded فقط
          title="Toggle Menu"
        >
          <FaBars />
        </button>
      )} */}

      
      <div
        className="bg-white shadow position-fixed"
        style={{
          top: "60px",
          left: "0",
          width: expanded ? 250 : 80,
          height: "calc(100vh - 56px)",
          transition: "width 0.3s ease",
          zIndex: 1051,
          overflow: "hidden",
        }}
      >
        {/* ❌ شيلنا زرار X بتاع الموبايل */}

        {/* ✅ زرار التوسيع/التقليص الداخلي (لو حابة تحتفظي بيه) */}
        <div className="text-end mt-3 mb-5 pe-2">
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
                location.pathname === link.path
                  ? "btn-outline-primary"
                  : "btn-light"
              }`}
              onClick={() => handleNavigate(link.name, link.path)}
              title={!expanded && !isMobile ? link.name : undefined}
            >
              <span className="me-2">{link.icon}</span>
              {expanded && <span>{link.name}</span>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
