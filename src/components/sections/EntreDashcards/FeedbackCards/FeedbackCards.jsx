import React from "react";
import "./FeedbackCards.css";
import { useNavigate } from "react-router-dom";

export default function FeedbackCards(){

   const Navigate =useNavigate();

    return(
        <div className="feedback-cards my-5">
            <div className="feedback-haeder d-flex justify-content-between  mb-3">
               <h4>Feedbacks</h4>
               <button className=" btn border-0 d-flex justify-content-center pt-2" onClick={()=>Navigate('/feedback')}>
                 <h6>see all</h6>
                 <i className="fa-solid fa-square-up-right ms-2 "></i>
               </button>
            </div>
        
           <div className="feedback-main-cards d-flex justify-content-between">
                <div className="card border-danger me-2 ">
                     <div className="card-body">
                        <div className="d-flex justify-content-center ">
                           <div className="border-0 rounded-circle bg-warning h-50 py-1 px-2 me-3">
                              <h3>AE</h3>
                           </div>
                           <div className="mt-2">
                              <h6>Ahmed El sayed</h6>
                              <p>propositional and smart person</p>
                           </div>
                         </div>
               
                       <div className="feedback-icons d-flex justify-content-center text-warning fs-4  ">
                            <i className="fa-solid fa-star me-2"></i>
                            <i className="fa-solid fa-star me-2"></i>
                            <i className="fa-solid fa-star me-2"></i>
                            <i className="fa-solid fa-star me-2"></i>
                            <i className="fa-solid fa-star me-2"></i>
                       </div>
                    </div>
             </div>


               <div className="card border-danger me-2 ">
                     <div className="card-body">
                        <div className="d-flex justify-content-center ">
                           <div className="border-0 rounded-circle bg-warning h-50 py-1 px-2 me-3">
                              <h3>AE</h3>
                           </div>
                           <div className="mt-2">
                              <h6>Ahmed El sayed</h6>
                              <p>propositional and smart person</p>
                           </div>
                         </div>
               
                       <div className="icons d-flex justify-content-center text-warning fs-4 ">
                            <i className="fa-solid fa-star me-2"></i>
                            <i className="fa-solid fa-star me-2"></i>
                            <i className="fa-solid fa-star me-2"></i>
                            <i className="fa-solid fa-star me-2"></i>
                            <i className="fa-solid fa-star me-2"></i>
                       </div>
                    </div>
               </div>



               <div className="card border-danger ">
                     <div className="card-body">
                        <div className="d-flex justify-content-center ">
                           <div className="border-0 rounded-circle bg-warning h-50 py-1 px-2 me-3">
                              <h3>AE</h3>
                           </div>
                           <div className="mt-2">
                              <h6>Ahmed El sayed</h6>
                              <p>propositional and smart person</p>
                           </div>
                         </div>
               
                       <div className="icons d-flex justify-content-center text-warning fs-4 ">
                            <i className="fa-solid fa-star me-2"></i>
                            <i className="fa-solid fa-star me-2"></i>
                            <i className="fa-solid fa-star me-2"></i>
                            <i className="fa-solid fa-star me-2"></i>
                            <i className="fa-solid fa-star me-2"></i>
                       </div>
                    </div>
               </div>


        
          </div>
        </div>
    )
}




