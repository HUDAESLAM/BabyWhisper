import React from "react";
import { useState , useEffect } from "react";
import axios from "axios";
import Sidebar from "../SideBar/Sidebar";
import NavUser from "../UserNavbar/NavUser";
import Loading from "../loadingScreen/Loading";
import "./notification.css";


export default function Notification(){

    const [notifications, setNotifications] = useState([]);
    const userId = localStorage.getItem("userId"); 

    useEffect(() => {
      if (userId) {
        axios
          .get(`http://localhost:8000/api/notification/getUserNotifications/${userId}`)
          .then((res) => {
            setNotifications(res.data);
          })
          .catch((err) => {
            console.error("Error fetching notifications:", err);
          });
      }
    }, [userId]);

    return(
        <>
          <div className="notification-bg">
                <NavUser />
             <div className="container-fluid m-0 p-0" style={{ paddingTop: "100px" }}>
                <div className="row mt-5 p-0 me-5">

                    <div className="col-12 col-md-2 p-0">
                         <Sidebar/>
                    </div>

                    <div className="col-12 col-md-10 p-3 ps-0 mt-2">
                       <div className="notification-content border border-2 rounded rounded-4  ">
                         <h1 className="mt-5 text-center text-md-start fs-3 fs-md-1 ms-5">Notifications</h1>

                    {notifications.length === 0 ? (
                        // <p>loading ....</p>
                     <Loading/>
                       ) : (
                       notifications.map((notif, index) => (
                         <div
                           key={index}
                           className="d-flex align-items-start justify-content-between  rounded-3 p-3 m-5 shadow-sm"
                         >
                           <div className="d-flex align-items-start gap-3">
                             <div className=" text-white rounded-circle d-flex justify-content-center align-items-center" style={{ width: 45, height: 45 , backgroundColor:" #de9ee3 ",}}>
                                <span className="fw-bold text-uppercase">
                                  {notif.type?.charAt(0) || "N"}
                                </span>
                             </div>
                             <div>
                                <p className="mb-1 fw-bold">{notif.content}</p>
                                <small className="text-muted">
                                  {new Date(notif.createdAt).toLocaleDateString()}
                                </small>
                             </div>
                           </div>
                           <button className="btn btn-sm text-danger fw-bold border-0">&times;</button>
                         </div>
                       ))
                     )}
                       </div>
                    </div>

                </div>
             </div>
          </div>
        </>
    )
}