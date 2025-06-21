import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaRobot,
  FaSyringe,
  FaBook,
  FaRegCommentDots,
  FaQuestionCircle,
} from "react-icons/fa";
import "../about/About.css";
import { MdGroups2 } from "react-icons/md";
import { PiQuestionMarkFill } from "react-icons/pi";
import { FaMicrophoneAlt } from "react-icons/fa";
import { RiRobot2Fill } from "react-icons/ri";
import { RiCalendarScheduleLine } from "react-icons/ri";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Sidebar from '../SideBar/Sidebar'


export default function AboutUs() {
  return (
    <>
        
      <Sidebar />
      
      <div className="bg-light text-dark pt-5 font-second mt-5">
        <Container>
          <h2 className="text-center mb-4 fw-bold">About us</h2>
          <div className="text-center mb-5">
            <MdGroups2 size={40} className="mb-2 text-primary" />
            <h3 className="fw-bold">Welcome to BabyWhisper</h3>
            <p className="text-muted">Your Smart Parenting Assistant.</p>
            <p className="mx-auto w-75 text-center">
              <strong>BabyWhisper</strong> is designed to support new parents by
              using intelligent technology to analyze baby cries and identify
              possible causes such as hunger, discomfort, sleepiness, or pain.
              With advanced AI and sound processing, the system offers real-time
              alerts and suggestions to help parents respond more effectively to
              their baby’s needs.
            </p>
          </div>
          <Row className="align-items-center mb-5">
            <Col md={6} className="text-center mb-4 mb-md-0">
              <div className="img-fluid rounded Mom"></div>
              <h5 className="text-primary mt-3">Features of BabyWhisper</h5>
            </Col>
            <Col md={6}>
              <div className="px-4 bg-light text-center">
                <PiQuestionMarkFill size={32} className="mb-2 text-purple " />
                <h5 className="fw-bold text-center">Our Vision</h5>
                <p>
                  At <strong className="text-purple">BabyWhisper</strong>, our
                  vision is to become the global leader in AI-driven parenting
                  support—empowering families with deeper insights into their
                  babies’ needs and fostering a more conscious and nurturing
                  environment for every child.
                </p>
              </div>
            </Col>
          </Row>
          <Row className=" mb-5 ">
            <Col md={6}>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <strong><FaMicrophoneAlt /> Cry Analysis:</strong>
                  <br />
                  The system provides instant feedback on the likely reason
                  behind a baby’s cry using a pre-trained AI model.
                </li>
                <li className="mb-3">
                  <strong>
                    <RiRobot2Fill className="me-2" /> Smart Chatbot:
                  </strong>
                  <br />
                  An interactive chatbot is available to answer common parenting
                  questions and provide quick guidance in a friendly,
                  easy-to-understand way.
                </li>
                <li className="mb-3">
                  <strong>
                    <RiCalendarScheduleLine className="me-2" /> Vaccination Schedule:
                  </strong>
                  <br />A built-in tool helps parents keep track of their
                  child’s vaccination dates with automatic reminders and a
                  personalized calendar.
                </li>
                <li>
                  <strong>
                    <FaBook className="me-2" /> Parenting Resources:
                  </strong>
                  <br />A rich collection of articles, videos, and expert advice
                  to help parents raise their children with confidence and care.
                </li>
              </ul>
            </Col>
            <Col md={6}>
              <div className="img-fluid rounded mb-3 Baby" />
              <div />
              <h5 className="fw-bold text-center">Our Mission</h5>
              <p className="text-center">
                To provide smart, accessible tools that help parents respond to
                their babies’ needs with confidence and clarity—through cry
                analysis, personalized guidance, and reliable parenting
                resources that support modern caregiving.
              </p>
            </Col>
          </Row>
          <p className="text-center text-muted">
            At <strong className="text-purple">BabyWhisper</strong>, we believe
            that conscious parenting begins with truly understanding your child,
            and we’re here to help you every step of the way through the power
            of technology.
          </p>
        </Container>
      </div>
      <Footer />
      
    </>
  );
}
