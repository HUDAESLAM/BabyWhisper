import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiLeftArrowAlt } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaArrowDown } from "react-icons/fa";
import { Offcanvas } from "react-bootstrap";
import Logo from "../../assets/Logo.png";

export default function NavUser() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const handleToggle = () => setShowMenu(!showMenu);
  const handleClose = () => setShowMenu(false);
  
  
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const profilePic = user.profile_picture;
  const username = user.name;
  // const handleSearch = (e) => {
  //   const value = e.target.value;
  //   setQuery(value);

  const icon = {
    leftArrow: <BiLeftArrowAlt />,
    search: <FaSearch />,
    notification: <IoNotificationsSharp />,
    arrowDown: <FaArrowDown />,
  };

  return (
    <div className="container-fluid  m-0 p-0">
      <nav
        className="navbar navbar-expand-lg bg-light fixed-top shadow-sm"
        style={{ height: "60px" }}
      >
        <div className="container text-center mx-auto  m-0 px-3">
          <div className="">
            <img src={Logo} alt="" style={{ height: "40px" }} />
          </div>
          <button className="navbar-toggler" type="button" onClick={handleToggle}>
              <span className="navbar-toggler-icon"></span>
          </button>

          {/* search bar  */}
          <div
            className="collapse navbar-collapse d-none d-lg-flex justify-content-between align-items-center"
            id="navbarSupportedContent"
          >
            <form className="ms-5 w-50">
              <div className="input-group p-1 border rounded-5 ">
                <span className=" input-group-text bg-transparent border-0">
                  <FaSearch className="main" />
                </span>
                <input
                  type="text"
                  className="form-control border-0 bg-transparent "
                  placeholder="Search for anything..."
                  
                />
              </div>
            </form>

            {/* end of search bar  */}
            <div
              className="d-flex align-items-center gap-3 me-3 ">
              <Link className="nav-link main fs-4" to="/notification">
                    {icon.notification}
                  </Link>
            </div>

            {/* profile picture */}
    <img
      src={profilePic || "https://via.placeholder.com/150"}
      alt="Profile"
      onClick={() => navigate("/profile")}
      className="rounded-circle cursor-pointer"
      style={{ width: "40px", height: "40px", objectFit: "cover" }}
    />
  
        <div className="d-flex flex-column pt-2 profile-details">
    <span className="profile-name text-black fw-bold cursor-pointer"
    onClick={() => navigate("/profile")}
    >{username}</span>
  </div>
</div>
        </div>
      </nav>
      <Offcanvas show={showMenu} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Search */}
          <form className="mb-4">
            <div className="input-group p-1 border rounded-5">
              <span className="input-group-text bg-transparent border-0">
                <FaSearch className="main" />
              </span>
              <input
                type="text"
                className="form-control rounded-5  border-0 bg-transparent"
                placeholder="Search for anything..."
              />
            </div>
          </form>

          {/* Notification */}
          <div className="mb-3">
            <Link className="nav-link main fs-4" to="#">
              🔔 Notifications
            </Link>
          </div>

          {/* Profile */}
          <div className="d-flex align-items-center gap-3">
            <img
              src={profilePic || "https://via.placeholder.com/150"}
              alt="Profile"
              className="rounded-circle cursor-pointer"
              onClick={() => {
                navigate("/profile");
                handleClose();
              }}
              style={{ width: "40px", height: "40px", objectFit: "cover", cursor: "pointer" }}
            />
            <span className="fw-bold text-black cursor-pointer" onClick={() => {
              navigate("/profile");
              handleClose();
            }}>
              {username}
            </span>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
