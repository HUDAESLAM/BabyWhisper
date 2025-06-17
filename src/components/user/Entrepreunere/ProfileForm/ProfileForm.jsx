import React from "react";
import { useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import axios from "axios";
import './ProfileForm.css';
import EntreNavBar from "../../../sections/EntreNavBar/EntreNavBar";
// import Cookies from 'js-cookie';
// import EntreProfile from "../Profile/EntreProfile";
// import { color } from "framer-motion";


export default function ProfileForm({ user, onSubmit, onCancel }){
      

    
    const [profilePic] = useState('default-avatar.png');
   

    const [formData, setFormData] = useState({
      username: user?.username || '',
      email: user?.email || '',
      phone: user?.phone || '',
      country: user?.country || '',
      user_background: user?.user_background || '',
      user_interests: user?.user_interests || " ",
      user_languages: user?.user_languages || " ",

    });


    function getData(e){
      let data = {...formData};
      data[e.target.name]= e.target.value;
      setFormData(data);
      console.log(data);
    }


    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(formData);  // Call the parent component's onSubmit function
    };
  

    
        // const handleImageChange = (e) => {
        //   const file = e.target.files[0];
        //   if (file) {
        //         const reader = new FileReader();
        //          reader.onload = (e) => {
        //            setProfilePic(e.target.result); // Update profile picture
        //          };
        //          reader.readAsDataURL(file); // Convert image to base64 URL
        //     }

        //   }


    return(
     <div className="container-fluid rounded-4 shadow-sm ">

          <div><EntreNavBar profilePic={profilePic}  formData={formData} /></div>
                   
               <div className="header rounded-3 shadow p-4 mt-2"
                  style={{ backgroundColor: '#E86924'}} > 
                  <span className="text-white">Welcome</span>
                  <span className="text-black">,Charles Deo</span>
               </div>
    
               <div className="head-form d-flex justify-content-between w-100 mt-4">
                 <div className="d-flex justify-content-start  ">
                    <div className="entre-profile-pic-container">
                       <form onSubmit={handleSubmit}>
                       <label htmlFor="profileImage"></label>
                       <br/>

                       <input 
                           type="file" 
                           id="uploadImage" 
                           accept="image/*" 
                           style={{ display: 'none'}} 
                          //  onChange={handleImageChange} 
                        />           
                       </form >                         
                         <img 
                           src={profilePic} 
                           alt="Profile" 
                           className="entre-profile-pic" 
                           onClick={() => document.getElementById('uploadImage').click()}
                         />
                    </div>
                    
                        <div className="ms-5 pt-3 pt-5">
                           <p>{formData.username}</p>
                           <p>{formData.email}</p>
                       </div>
                     </div>
                   </div>
    
                   <form className="mt-5" onSubmit={ handleSubmit}>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                   
                
                     <div className="w-50 ">
                        <label className="form-label">User Name</label>
                        <input type="text"
                        placeholder="your user name" 
                        className="form-control" 
                        onChange={getData}
                        name="username" 
                        value={formData.username}
                        />
                     </div>


                     <div className="w-50 ms-3 "> 
                        <label>User background </label> 
                        <input type="text"  
                        placeholder="your Background" 
                        className="form-control" 
                        onChange={getData} 
                        name="user_background"           
                        value={formData.user_background}
                       
                        />
                    </div>
    
                    </div>
    
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div className="w-50 ">
                        <label className="form-label">Country</label> 
                        <input 
                        className="form-control"
                        placeholder="your country" 
                        type="text"
                        onChange={getData} 
                        name="country" 
                        value={formData.country}
                         />
                      </div>
    
                      <div className="w-50 ms-3 ">
                        <label>Language </label>
                        <select
                         name="user_languages"
                          id="user_languages" 
                          className="form-control"
                          onChange={getData} 
                         value={formData.user_languages}
                          >
                        <option value="">select your Language </option>
                        <option value="English">English</option>
                        <option value="Arabic">Arabic</option>
                        <option value="French">French</option>
                        <option value="Italy">Italy </option>
                        </select>
                      </div>
    
                    </div >
                     
                     <div className="d-flex justify-content-between align-items-center mb-4">
                     <div className="w-50">
                         <label>Phone Number </label>
                         <input 
                          type="tel"
                          placeholder="your Phone Number"
                          className="form-control" 
                          onChange={getData} 
                          name="phone" 
                          value={formData.phone}
                           />
                      </div>

                    <div className="w-50 ms-3">
                     <label>Intrests </label>
                        <select
                         name="user_interests"
                          id="user_interests" 
                          className="form-control"
                          onChange={getData} 
                         value={formData.user_interests}
                          >
                        <option value="">select your Intrests </option>
                        <option value="technology">technology</option>
                        <option value="economy">economy</option>
                        <option value="industry">industry</option>
                        <option value="others">others </option>
                        </select>
                      </div>
                       
                     </div>

                     

                     <h5>My email address</h5>
                   <div className="d-flex justify-content-start align-items-center ">
                   <div className="e-mail p-2 rounded-circle me-3 "><i className="fa-solid fa-envelope"></i></div>
                    <p className="pt-3">ُE-mail</p>
                   </div>
    
                   <div className="d-flex justify-content-between my-5">
                    <button className="btn ">Add email address</button>
                    <div>
                    <button  className="btn me-2"  type="button" onClick={onSubmit}>Save</button>
                    <button type="button" className="btn me-3" onClick={onCancel}>Cancel</button>
                    </div>
                    

    
                   </div>
    
                   </form>                 


            </div>
    );
 };
