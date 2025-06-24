import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../SideBar/Sidebar";
import "./Schedule.css";
import NavUser from "../UserNavbar/NavUser";
import Cloudbg from "../../assets/cloudbg.jpg";
import Baby2 from "../../assets/Baby2.jpg";
import { Link, useNavigate } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Button } from "react-bootstrap";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Container, Row, Col } from "react-bootstrap";

export default function Schedule() {
  const navigate = useNavigate();

  const [groupedData, setGroupedData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/schedule/getAllSchedules")
      .then((res) => {
        const rawSchedules = res.data.data.schedules;

        // ✅ تجميع البيانات حسب age_group
        const grouped = rawSchedules.reduce((acc, curr) => {
          const ageGroup = curr.age_group;
          if (!acc[ageGroup]) acc[ageGroup] = [];
          acc[ageGroup].push(curr);
          return acc;
        }, {});

        setGroupedData(grouped);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="Schedule-bg">
      <NavUser />
      {/* ✅ محتوى الصفحة الرئيسي */}
      <div className="container-fluid m-0 p-0" style={{ paddingTop: "100px" }}>
        <div className="row m-0 p-0">
          {/* Sidebar */}
          <div className="col-12 col-md-2 p-0">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="col-12 col-md-10 p-3 ps-0">
            <div className="schedule-content">
              <h1 className="mt-5 text-center text-md-start fs-3 fs-md-1">Schedule</h1>

              {/* Vaccination Description Section */}
              <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 w-100 mx-auto">
                <img
                  src={Baby2}
                  alt="Baby"
                  className="img-fluid"
                  style={{ maxWidth: "300px" }}
                />
                <div className="position-relative text-center">
                  <p className="mb-2 text-center text-md-start fs-6 fs-md-5 ms-5 ps-4">
                    Children's vaccination schedule according to the Ministry of
                    Health.
                  </p>
                  <button
                    className="btn main shadow mt-2"
                    onClick={() =>
                      window.open(
                        "https://www.mohp.gov.eg/Default.aspx",
                        "_blank"
                      )
                    }
                  >
                    Show <MdKeyboardDoubleArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ جدول التطعيمات */}
      <Container className="mx-5 px-5 mb-5" style={{ paddingTop: "20px" }}>
        <h2 className="mb-3 text-start">Childhood Immunization Schedule</h2>

        {Object.entries(groupedData).map(([ageGroup, entries], groupIdx) =>
          entries.map((entry, idx) => (
            <Row
              key={`${groupIdx}-${idx}`}
              className="border rounded-4 py-3 px-2 align-items-center bg-light-purple shadow-sm mb-3"
            >
              <Col
                xs={12}
                md={1}
                className="d-flex justify-content-center mb-3 mb-md-0"
              >
                <div
                  className="rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: "#B388FF",
                    width: "50px",
                    height: "50px",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  {idx + 1}
                </div>
              </Col>

              <Col
                xs={12}
                md={3}
                className="text-center text-md-start mb-3 mb-md-0"
              >
                <h6 className="mb-1 fw-bold text-primary">{ageGroup}</h6>
                <p className="mb-0">DOSE: {entry.doses.dose_name}</p>
              </Col>

              <Col
                xs={12}
                md={3}
                className="text-center text-md-start mb-3 mb-md-0"
              >
                <p className="mb-1">
                  <strong>Disease:</strong> {entry.vaccine.disease}
                </p>
                <p className="mb-0">
                  <strong>Vaccine:</strong> {entry.vaccine.vaccine_name}
                </p>
              </Col>

              <Col xs={12} md={5} className="text-center text-md-end">
                <p className="w-100">dosage: {entry.vaccine.dosage}</p>
                <p className="w-100">route: {entry.vaccine.route}</p>
              </Col>
            </Row>
          ))
        )}
      </Container>
    </div>
  );
}
