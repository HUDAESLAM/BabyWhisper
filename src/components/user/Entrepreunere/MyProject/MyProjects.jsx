import React from "react";
import { useNavigate } from "react-router-dom";
import './MyProjects.css';
import image from "../../../../assets/image22.png";
import EntreNavBar from "../../../sections/EntreNavBar/EntreNavBar";
import EntreSideBar from "../../../sections/EntreSideBar/EntreSideBar";

export default function MyProjects() {
    // const [projects, setProjects] = useState([]);
    const navigate = useNavigate(); 

    const projects = [
      {
        id: 1,
        name: "Green Energy Startup",
        description: "Affordable and sustainable solar panels for homes.",
        status: "funding",
        target: 50000,
        field: "Renewable Energy",
        deadline: "2025-12-31",
        budget: 60000,
        offer: 55000
      },
      {
        id: 2,
        name: "Smart Farming Solutions",
        description: "IoT-based smart farming technologies.",
        status: "under review",
        target: 75000,
        field: "Agriculture Technology",
        deadline: "2025-11-30",
        budget: 80000,
        offer: 78000
      },
      {
        id: 3,
        name: "AI Healthcare App",
        description: "An AI-powered app for faster patient diagnostics.",
        status: "funded",
        target: 100000,
        field: "HealthTech",
        deadline: "2026-01-15",
        budget: 110000,
        offer: 105000
      },
      {
        id: 4,
        name: "EduTech Platform",
        description: "An online platform offering coding bootcamps for underprivileged youth.",
        status: "under review",
        target: 75000,
        field: "Education Technology",
        deadline: "2025-10-10",
        budget: 70000,
        offer: 68000
      }
    ];
    
  
    // Update handleClick to accept the project id
    const handleClick = (project) => {
        navigate(`/projectdetails/${project.id}`,{ state: { projects: project } });
    };
    
    // const handleSortByLetter = () => {
    //     const sortedProjects = [...projects].sort((a, b) => {
    //       const nameA = a.name || ''; // Fallback to an empty string if undefined
    //       const nameB = b.name || ''; // Fallback to an empty string if undefined
    //       return nameA.localeCompare(nameB);
    //     });
    //     setProjects(sortedProjects);
    // };
    
    return(
      <div className="container-fluid">
        <div>
            <EntreNavBar/>
        </div>
        <div className="row">
            <div className="col-lg-2">
              <EntreSideBar/>
            </div>
            <div className="col-lg-10 col-md-12">
                <div className="w-75 mx-auto">
                      <div className="header d-flex justify-content-between mt-3">
                         <h3>My Projects</h3> 
                          <div className="d-flex">                                                                           
                               <i className="fa-solid fa-filter me-2 mt-2"></i>
                               <p>Filter</p>                                                                                                                                                 
                         </div>
                       </div>

                      {projects.map((project, index) => (
                      <div 
                        onClick={() => handleClick(project)}  // Pass the project ID here
                        key={index} 
                        className="row cards justify-content-around rounded mb-3">
                          <div className="cards-img col-lg-2 align-self-center">
                             <img src={image} alt=" " />
                         </div>
                          <div className="cards-text col-lg-7 py-3">
                              <h2>{project.name}</h2>
                              <p>{project.description}</p>
                          </div>
                          <div className="cards-text col-lg-1 align-self-end">
                              <p>{project.status}</p>
                              <p>{project.target}</p>
                          </div>
                       </div>
                      ))}
                </div>
            </div>
                <div className="col-lg-10 col-md-12">
                    <div className="w-50 ms-auto mb-5">
                    <button className="btn w-100" onClick={()=>navigate('/projectform')}>Add Project</button>
                    </div>    
                </div>
         </div>
      </div>
    )
}


  