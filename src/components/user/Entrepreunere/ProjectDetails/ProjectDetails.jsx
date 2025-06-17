import React from "react";
// import axios from "axios";
import { useLocation} from "react-router-dom";
import EntreSideBar from "../../../sections/EntreSideBar/EntreSideBar";
import EntreNavBar from "../../../sections/EntreNavBar/EntreNavBar";
import "./ProjectDetails.css";

export default function ProjectDetails() {


  const location = useLocation();
  const { projects } = location.state || {};

  if (!projects) {
    return <div>No project data found</div>;
  }


  return (
    <div className="container-fluid">
      <div><EntreNavBar /></div>
      <div className="row">
        <div className="col-lg-2">
          <EntreSideBar />
        </div>
        <div className="col-lg-10">
          <div className="main-body">
            <div className="header mb-4 w-75">
              <div className="d-flex justify-content-between">
                <h2>Project name: {projects.name ? projects.name : "EcoPackage"}</h2>
                <h4 className="pt-2 ms-5 ps-5">Field: {projects.field || "N/A"}</h4>
              </div>
              <p className="mb-0 mt-2">Status: {projects.status || "Pending"}</p>
            </div>

            <div className="card w-75 mb-4 desc">
              <div className="card-body d-flex text-white">
                <div className="pe-2 pt-3">
                  <i className="fa-solid fa-bullseye target"></i>
                </div>
                <div className="pt-3">
                  <p>{projects.description || "No description available"}</p>
                </div>
              </div>
            </div>

            <div className="d-flex mb-4">
              <div className="card me-2 w-25">
                <div className="card-body status text-center">
                  <h4>Budget</h4>
                  <h3>${projects.budget || "N/A"}</h3>
                </div>
              </div>

              <div className="card me-2 w-25">
                <div className="card-body status text-center">
                  <h4>offer</h4>
                  <h3>${projects.offer || "N/A"}</h3>
                </div>
              </div>

              <div className="card me-2 w-25">
                <div className="card-body status text-center">
                  <h4>target</h4>
                  <h3>${projects.target || "N/A"}</h3>
                </div>
              </div>
            </div>

            <div>
              <h5>Attachments</h5>
              <div className="d-flex mt-3">
                <div className="d-flex border rounded-3 px-4 pt-2 me-5">
                  <i className="fa-solid fa-file me-3"></i>
                  <h6>{projects.document ? projects.document.path : "No attachment"}</h6>
                </div>
                <div className="d-flex border rounded-3 px-4 pt-2 me-5">
                  <i className="fa-solid fa-file me-3"></i>
                  <h6>{projects.document ? projects.document.path : "No attachment"}</h6>
                </div>
              </div>
            </div>

            <div className="mt-4 text-danger fw-bold">
              <p>Deadline: {projects.deadline || "No deadline"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
