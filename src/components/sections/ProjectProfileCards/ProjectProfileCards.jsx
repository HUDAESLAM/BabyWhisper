import React from "react";
import image from "../../../assets/image22.png";
import "./ProjectProfileCards.css";



 export default function ProjectProfileCards(){
    return (


       <div >
        <div className="entre-project-profile-cards-haeder d-flex justify-content-between mx-2 mb-3">
               <h4 style={{color:"#E86924"}}>My projects</h4>
               <button className="entre-project-profile-button btn border-0 d-flex justify-content-center pt-2">
                 <h6>see all</h6>
                 <i className="fa-solid fa-square-up-right ms-2 "></i>
               </button>
        </div>

  <div className="project-profile-cards-body d-flex justify-content-between  ">

<div className="card text-white bg-orange mb-3 mx-2 " style={{ maxWidth: '18rem' }}>
   <div className="card-body">
      <div className="icon mb-3" style={{backgroundColor:'#e7aa89'}}>
      <img src={image} alt="Project Icon" className="project-card-img img-fluid mb-4" />
      </div>
   <h3 className="card-title">Project-1</h3>
      <p className="card-text">
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     </p>
     <p className="card-status text-white">Under Review</p>
</div>
</div>



<div className="card text-white bg-orange mb-3 mx-2 " style={{ maxWidth: '18rem' }}>
<div className="card-body">
  <div className="icon mb-3" style={{backgroundColor:'#e7aa89'}}>
    <img src={image} alt="Project Icon" className="img-fluid mb-4" />
  </div>
  <h3 className="card-title">Project-1</h3>
  <p className="card-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
  <p className="card-status text-white">Under Review</p>
</div>
</div>


<div className="card text-white bg-orange mb-3 mx-2 " style={{ maxWidth: '18rem' }}>
<div className="card-body">
  <div className="icon mb-3" style={{backgroundColor:'#e7aa89'}}>
    <img src={image} alt="Project Icon" className="img-fluid mb-4" />
  </div>
  <h3 className="card-title">Project-1</h3>
  <p className="card-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
  <p className="card-status text-white">Under Review</p>
</div>
</div>

</div>
            
       </div>

    );
 };