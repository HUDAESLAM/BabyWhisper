import { useState } from "react"
import axios from "axios";
import "./ProjectForm.css";
import EntreNavBar from "../../../sections/EntreNavBar/EntreNavBar";
import { useNavigate } from "react-router-dom";
// import ProjectCards from "../../../sections/EntreDashCards/ProjectCards/ProjectCards";
// import Cookies from 'js-cookie';

export default function ProjectForm({onProjectCreated}){


    
    const navigate = useNavigate();
    // const [isFirstSubmission, setIsFirstSubmission] = useState(true); // Track first submission
   //  const [isEditing, setIsEditing] = useState(false); // New state for editing
    const [projectData , setProjectData] = useState({
        entrepreneur_id:" ",
        project_id:" ",
        name: " " ,
        description:" ",
        status:" ",
        field:" ",
        budget:" ",
        offer:" ",
        target:" ",
        deadline:" ",
        document:" "
    });

    function handleSubmit(e){
         e.preventDefault();
         axios.post(`http://127.0.0.1:8000/api/createProject`, projectData).then((res)=>{
            console.log("Project created successfully:", res.data);
            setProjectData(); 
            alert('Project created successfully click to navigate to the project details');
            const newProjectId = res.data.project_id;

            onProjectCreated(res.data); // Pass the new project data to the parent
            
             // Navigate to the new project details page
             navigate(`/projectdetails/${newProjectId}`);
        
           }).catch((err)=>{
                console.error('Error creating Project:', err.response.data);
           });
          }
       

       function getData(e){
        let data = {...projectData};
        data[e.target.name]= e.target.value;
        setProjectData(data);
        console.log(data);
        
      }

      
    return(
        <div className="container-fluid">
           <div><EntreNavBar/></div>


     <div className="container">
            <div className="header mt-5">
                <h3>Project Form</h3>
                <p>Need an experienced and skilled hand with custom IT projects? </p>
                <p>Fill out the form to get a free consultation</p>
             </div>

            <div className="row ">
               <div className="col-lg-7">
                  <div className="my-5">

                    <form onSubmit={handleSubmit} className="needs-validation" noValidate> 
                    <label className="form-label"></label>
                    <input 
                    
                    type="text"
                     className="border border-0 border-bottom w-100 mb-5" 
                     placeholder=" enter Project Name" 
                     onChange={getData} 
                     name="name" 
                    //  value={projectData.name}
                     id="validationCustom01" 
                      required 
                      ></input>


                    <label className="form-label"> </label>
                    <input type="text" 
                    className="border border-0 border-bottom w-100 mb-5"  
                    placeholder="Description" 
                    onChange={getData}  
                    name="description" 
                  //   value={projectData.description}
                    id="validationCustom02" 
                     required ></input>

                    <label className="form-label"></label>
                    <input type="text" 
                    className="border border-0 border-bottom w-100 mb-5"  
                    placeholder=" Field" 
                    onChange={getData}  
                    name="field" 
                  //   value={projectData.field}
                    id="validationCustom03"  
                    required></input>

                    <label className="form-label"></label>
                    <input type="text"
                     className="border border-0 border-bottom w-100 mb-5" 
                     placeholder="enter status" 
                     onChange={getData} 
                     name="status" 
                     // value={projectData.status}
                     id="validationCustom01" 
                      required 
                      ></input>
                    
                    <label className="form-label"></label>
                    <input type="number" 
                    className="border border-0 border-bottom w-100 mb-5"   
                    placeholder="budget" 
                    onChange={getData} 
                    name="budget" 
                  //   value={projectData.budget}
                    id="validationCustom04"  
                    required></input>

                    <label className="form-label"></label> 
                    <input 
                    type="number" 
                    className="border border-0 border-bottom w-100 mb-5" 
                    placeholder="offer" 
                    onChange={getData} 
                    name="offer" 
                  //   value={projectData.offer}
                    id="validationCustom05"  
                    required></input>

                    <label className="form-label"></label>
                    <input type="number" 
                    className="border border-0 border-bottom w-100 mb-5"  
                    placeholder=" target" 
                    onChange={getData}  
                    name="target" 
                  //   value={projectData.target}
                    id="validationCustom06"  
                    required></input>

                    <label className="form-label"></label>   
                    <input 
                    type="date"  
                    className="border border-0 border-bottom w-100 mb-5"                     
                    placeholder="deadline" 
                    onChange={getData}   
                    name="deadline"
                  //   value= {projectData.deadline}
                    />

                    <label className="form-label"></label> 
                    <input type="file"  
                    className="form-control" 
                    placeholder="upload document" 
                    onChange={getData}  
                    name="document" 
                  //   value={projectData.document} 
                    />

                    <button className="btn  w-100 mt-5 mb-3 " type="submit">Submit</button>
                      <div className="form-check">
                         <input className="form-check-input" type="checkbox" value=""  id="invalidCheck" required/>
                         <label className="form-check-label"  for="invalidCheck">
                           I want to protect my data by signing an NDA
                         </label>
                      </div>

                    </form>

                  </div>
               </div>

               <div className="col-lg-5 ">
                <div className="ms-5">

                   <b>Locations</b>
                   <div className="mt-4">
                   <p className="mb-0"> United States </p>
                   <p> 500 5th Avenue Suite 400, NY 10110 </p> 
                   </div>

                   <div className="mt-4">
                   <p className="mb-0"> United Kingdom </p>
                   <p> High St, Bromley BR1 1DN </p> 
                   </div>

                   <div className="mt-4">
                   <p className="mb-0">France  </p>
                   <p> 80 avenue des Terroirs de France, Paris </p> 
                   </div>

                </div>

                <div className="ms-5">
                   <b>For Quick Inquiries</b>
                   <div className="mt-4">
                      <div className="d-flex">
                      <i className="fa-solid fa-flag-usa"></i>
                       <p>+44 7777777777</p>
                      </div>
                   </div>

                   <div className="">
                      <div className="d-flex">
                      <i className="fa-solid fa-flag-usa"></i>
                       <p>+1 3333333330</p>
                      </div>
                   </div>
                </div>
                     
               </div>
            </div>


          
        </div>
        </div>
    )
}