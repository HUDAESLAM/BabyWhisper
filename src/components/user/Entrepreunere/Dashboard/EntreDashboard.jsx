import React from "react";
import "./EntreDashboard.css";
// import { useState } from "react";
import EntreNavBar from "../../../sections/EntreNavBar/EntreNavBar";
import EntreSideBar from "../../../sections/EntreSideBar/EntreSideBar";
import ProjectCards from "../../../sections/EntreDashcards/Projectcards/ProjectCards";
import FeedbackCards from "../../../sections/EntreDashcards/FeedbackCards/FeedbackCards";
import Mettings from "../../../sections/EntreDashcards/Mettings/Metting";

export default function EntreDashboard(){

  
    return( 

         <div className="container-fluid Dashboard">
              <div className="row">
                <div className="Navbar">
                  <EntreNavBar/> 
                </div>
                <div className="SideBar col-lg-2">
                 <EntreSideBar/>
                </div>

                <div className=" col-lg-7 mt-4">
                  <div>
                  <ProjectCards/>
                  {/* {projects.length > 0 && projects.slice(0, 3).map(project => (
                   <ProjectCards key={project.project_id} project={project} />
                     ))} */}
                  </div>
                  <div>
                  <FeedbackCards/>
                  </div>
                </div>
            
                 <div className="col-lg-3 ">
                    <Mettings/>
                 </div>

                

           </div> 
        </div>    
    )
}