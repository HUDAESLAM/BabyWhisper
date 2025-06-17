import React from "react"; 
import "./EntreSideBar.css";
import { Link } from "react-router-dom";


export default function EntreSideBar(){

      const icons={
            dashboard: <i className="fa-solid fa-table-cells-large "></i> ,
            message: <i className="fa-regular fa-message " ></i> ,
            project:<i className="fa-solid fa-bars-progress "></i>,
            communities:<i className="fa-solid fa-users "></i>,
            setting:  <i className="fa-solid fa-gear "></i>
         }


    return (
          <div className="">
            <ul className="nav flex-column ">
               <li className="nav-item d-flex justify-content-center ps-3 py-2 ">
                    <span className="pt-2">{icons.dashboard}</span>   
                    <Link className="nav-link w-100 " aria-current="page" to="/entredashboard">Dashboard</Link>
               </li>
               <li className="nav-item d-flex justify-content-center ps-3 py-2 ">
                     <span className="pt-2">{icons.message}</span>   
                     <Link className="nav-link w-100 " aria-current="page" to="/messages">Messages</Link>
               </li>
               <li className="nav-item d-flex justify-content-center ps-3 py-2 ">
                     <span className="pt-2">{icons.project}</span>   
                     <Link className="nav-link w-100" aria-current="page" to="/myprojects">My Projects</Link>
               </li>
               <li className="nav-item d-flex justify-content-center ps-3 py-2 ">
                      <span className="pt-2">{icons.communities}</span>   
                      <Link className="nav-link w-100 " aria-current="page" to="/JoinPage">Communities</Link>
               </li>
               <li className="nav-item d-flex justify-content-center ps-3 py-2 ">
                      <span className="pt-2">  {icons.setting} </span>   
                      <Link className="nav-link w-100 " aria-current="page" to="/profileform">Settings</Link>
               </li>
            </ul>
          </div>    
    )
}