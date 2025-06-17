// import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaBell } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef();
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
    setDropdownOpen(false);
  };
  const toggleMenu = () => setMenuOpen(!menuOpen);
  function isActive(path) {
    return path === location.pathname;
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const texts = {
    en: {
      home: "Home",
      sources: "Sources",
      about: "About",
      login: "Login",
      search: "Search...",
      langToggle: "EN",
    },
    ar: {
      home: "الرئيسية",
      sources: "المصادر",
      about: "حول",
      login: "تسجيل الدخول",
      search: "بحث...",
      langToggle: "ع",
    },
  };

  const t = texts[language];
  
  const navLinks = [
    {
      link: "/home",
      text: t.home,
    },
    {
      link: "/sources",
      text: t.sources,
    },
    {
      link: "/about",
      text: t.about,
    },
  ];

  return (
    <nav className="navbar backdrop-blur navbar-expand-lg navbar-light  shadow-sm fixed-top py-3">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/home">
          <img src={Logo} alt="Logo" style={{ width: "150px" }} />
        </Link>

        {/* Toggler */}
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Content */}
        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
          {/* Centered Links */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-4 text-center d-flex gap-5">
            {navLinks.map((item, i) => (
              <li key={i} className="nav-item">
                <NavLink
                  to={item.link}
                  className={`nav-link list-nav-act rounded-pill fw-bold ${
                    isActive(item.link) ? "text-white" : ""
                  }`}
                >
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="rightSide d-flex align-items-center gap-2 flex-wrap justify-content-center justify-content-lg-end ms-lg-auto mt-3 mt-lg-0">
            <input
              className="form-control searchBar"
              type="search"
              placeholder={t.search}
              style={{ maxWidth: "150px" }}
            />

            <NavLink className="btn login" to="/login">
              {t.login} <FaArrowRight />
            </NavLink>
            {/* <button className="btn login"></button> */}

            {/* Language Dropdown */}
            <div className="dropdown" ref={dropdownRef}>
              <button className="btn language" onClick={toggleDropdown}>
                {t.langToggle}
              </button>
              {dropdownOpen && (
                <ul className="dropdown-menu show">
                  <li>
                    <button className="dropdown-item" onClick={toggleLanguage}>
                      {language === "en" ? "العربية" : "English"}
                    </button>
                  </li>
                </ul>
              )}
            </div>

            <button className="notfication">
              <FaBell />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
