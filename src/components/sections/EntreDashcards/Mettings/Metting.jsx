import React from "react";
import "./Mettings.css";

export default function Mettings(){
    return(
        <div className="Metting-card ">
                {/* <Meetings/> */}
                <div className="metting-body border rounded-3 p-3 ">
                    <div className="metting-header d-flex justify-content-between mb-5 mt-2">
                        <h6>Upcoming mettting</h6>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>

                    <div className="metiing-section d-flex justify-content-between ">
                       <div className="border rounded-pill w-50 px-4 mb-5 pt-2 me-3">
                          <h6 >11:30</h6>
                       </div>
                       <div>
                          <p>Video call with "AI-Driven Cybersecurity" founder</p>
                       </div>
                    </div>

                    <div className="d-flex justify-content-between">
                       <div className="border rounded-pill w-50 px-4 mb-5 pt-2 me-3">
                          <h6>11:30</h6>
                       </div>
                       <div>
                          <p>Video call with "AI-Driven Cybersecurity" founder</p>
                       </div>
                    </div>

                    <div className="d-flex justify-content-between">
                       <div className="border rounded-pill w-50 px-4 mb-5 pt-2 me-3">
                          <h6>11:30</h6>
                       </div>
                       <div>
                          <p>Video call with "AI-Driven Cybersecurity" founder</p>
                       </div>
                    </div>

                </div>

              </div>
    )
}