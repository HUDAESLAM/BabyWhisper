import React from "react";
import { FaEnvelope, FaPhone, FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Footer.css"; 
import { FaBaby } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-light py-5 mt-5">
      <div className="container">
        <div className="row text-center text-md-start gy-4">
          {/* Logo & Contact */}
          <div className="col-md-3">
            <h4 className="fw-bold pb-4" >
              <span className="second">Baby</span><span className="first">Whisper</span>  <FaBaby style={{ color: "#de9ee3" }}/>
            </h4>
            <p className="mb-1 pb-2">
              <FaEnvelope className="me-2 first" />
              babywhisper@hello.com
            </p>
            <p>
              <FaPhone className="me-2 second" />
              +1 386-688-3295
            </p>
          </div>

          {/* Features */}
          <div className="col-md-2">
            <h6 className="fw-bold main pb-4 fs-5">features</h6>
            <ul className="list-unstyled  text-secondary">
              <li className="pb-2">Schedule</li>
              <li className="pb-2">Sources</li>
              <li>AI Chat</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4">
            <h6 className="fw-bold main pb-4 fs-5">Our Social Media</h6>
            <ul className="list-unstyled">
              <a href="#" className="text-decoration-none text-secondary">
                <li className="pb-2">
                <FaLinkedin className="me-2 text-primary" />
                babywhisper.LinkedIn
              </li>
              </a>
              <a href="#" className="text-decoration-none text-secondary">
                <li className="pb-2">
                <FaInstagram className="me-2 text-danger" />
                babywhisper.Instagram
              </li>
              </a>
              <a href="#" className="text-decoration-none text-secondary">
                <li className="pb-2">
                <FaFacebookF className="me-2 text-primary" />
                babywhisper.Facebook
              </li>
              </a>
              <a href="#" className="text-decoration-none text-secondary">
                <li className="pb-2">
                <FaTwitter className="me-2 text-info" />
                babywhisper.Twitter
              </li>
              </a>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="col-md-3">
            <h6 className="fw-bold main pb-4 fs-5">Join to US</h6>
            <div className="d-flex align-items-center mb-2">
              <MdEmail className="me-2 first fs-5" />
              <span className="fw-bold main">Your Email</span>
            </div>
            <input
              type="email"
              className="form-control my-4"
              placeholder="Enter Your Email"
            />
            <button className="btn rounded-pill px-3" style={{ backgroundColor: "#DA8CE0", color: "#fff" }}>
              Send
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;