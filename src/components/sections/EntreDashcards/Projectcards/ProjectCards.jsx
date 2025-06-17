import React from "react";
import './ProjectCards.css';
import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useState , useEffect } from "react";
// import { color } from "framer-motion";

export default function ProjectCards(){
   const navigate = useNavigate();

  //  const [projects, setProjects] = useState([ ]);

  

  //  useEffect(() => {
     
  //      axios.get(`http://127.0.0.1:8000/api/project`)
  //        .then((res) => {
  //          console.log("Project fetched successfully:", res.data);
  //          setProjects(res.data);
  //        })
  //        .catch((err) => {
  //          console.error("Error fetching project details:", err.message);
  //        });

  //    }, []);
 
  //  const handleClick = (project_id) => {
  //     navigate(`/projectdetails/${project_id}`);
  // };

    

    return(
        <div className="Project-cards "> 
                  <span className="welcome">welcome</span>
                   <span>,Charles Doel </span>
                  <div className="mt-5 ">
                      <div className="dashboard-Projects-header d-flex justify-content-between  mb-3" style={{ color: "#E86924" }}>
                         <h4>Recent Projects</h4>
                         <div>
                         <button onClick={() => navigate('/myprojects')}  
                          className="dashbord-entre-button btn border-0 d-flex justify-content-center pt-2">
                           <h6>see all</h6>
                           <i className="fa-solid fa-square-up-right ms-2 "></i>
                         </button>
                         </div>
                      </div>


          <div className="project-main-cards d-flex justify-content-between">
              <div className="cards border-danger me-2 py-3 ">                
                           <div className="border-0 h-50 py-1 px-2 me-3">
                             <h2>Project-1</h2>
                              <p>$53.999999 </p>
                              <p className="profits">12% increase from last month </p>
                           </div>                   
               </div>

               <div className="cards border-danger me-2  py-3 ">
                           <div className="border-0 h-50 py-1 px-2 me-3">
                             <h2>Project-1</h2>
                              <p>$53.999999 </p>
                              <p className="profits">12% increase from last month </p>
                           </div>
               </div>

               <div className="cards border-danger me-2  py-3 ">
                           <div className="border-0 h-50 py-1 px-2 me-3">
                             <h2>Project-1</h2>
                              <p>$53.999999 </p>
                              <p className="profits">12% increase from last month </p>
                           </div>
               </div>       
        </div>


                    
                      {/* <div  onClick={() => navigate('/projectdetails')}
                        className="project-main-cards d-flex  justify-content-between  ">
                         <div className="cards py-3 w-25 ps-2 pe-2 col-sm-12  ">
                            <div className="cards-body ">
                              <h2>Project-1</h2>
                              <p>$53.999999 </p>
                              <p className="profits">12% increase from last month </p>
                            </div>
                         </div>

                         <div className="cards py-3 w-25 col-sm-12">
                            <div className="cards-body">
                              <h2>Project-2  </h2>
                              <p>$53.999999 </p>
                              <p className="profits">12% increase from last month </p>

                            </div>
                         </div>

                         <div className="cards py-3 w-25 col-sm-12">
                            <div className="cards-body">
                              <h2>Project-3 </h2>
                              <p>$53.999999 </p>
                              <p className="profits">12% increase from last month </p>

                            </div>
                         </div>
                      </div> */}

                        {/* {projects.length > 0 && projects.slice(0, 3).map(project => (
                   <ProjectCards key={project.project_id} project={project} />
                     ))} */}
{/* 
              
                     <div  className="row  project-main-cards  justify-content-between">
                        {projects.slice(0, 3).map(project => (
                         <div key={project.project_id} onClick={() => handleClick(project._id)}  className="cards p-3 mb-3 col-lg-4 col-sm-12">
                           <div className="cards-body ">
                              <h2>{project.name}</h2>
                              <p>{project.description} </p>
                              <p className="profits">{project.target} </p>
                            </div>
                          </div>
                        ))}
                      </div> */}
                     
                    </div>
        </div>
    );
};




