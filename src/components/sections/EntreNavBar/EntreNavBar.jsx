import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './EntreNavBar.css';
import Image from "../../../assets/a_user01_avatar.png";

export default function EntreNavBar({profilePic}){



  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
      const value = e.target.value;
      setQuery(value);

      // Define the routing logic based on the input
      if (value.toLowerCase() === 'dashboard') {
          navigate('/entreDashboard');
      } else if (value.toLowerCase() === 'communities') {
          navigate('/communities');
      } else if (value.toLowerCase() === 'settings') {
          navigate('/settings');
      } else if (value.toLowerCase() === 'messages') {
          navigate('/messages');
      } else if (value.toLowerCase() === 'my projects') {
          navigate('/my-projects');
      }
      else if (value.toLowerCase() === 'notification') {
        navigate('/notification');
      }
      else if (value.toLowerCase() === 'profile') {
        navigate('/entreprofile');
      }

  };


    const icon = {
        leftArrow:<i class="fa-solid fa-angles-left"></i>,
        search:<i class="fa-solid fa-magnifying-glass"></i>,
        notification: <i class="fa-regular fa-bell"></i>,
        calender: <i class="fa-solid fa-calendar-days"></i>,
        arrowDown :<i class="fa-solid fa-chevron-down"></i>

      }


    return(
     <div className="container-fluid  m-0 p-0">
      <nav className="navbar navbar-expand-lg bg-body-transparent">
      <div className="container-fluid  m-0 p-0">

       <div className="">
           <Link className="navbar-brand me-5" to="#">Innovest</Link>
           <Link className="arrow-icon navbar-brand  ms-5 " to="#">{icon.leftArrow} </Link>
       </div>
            <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

   {/* search bar  */}

    <div className="collapse navbar-collapse " id="navbarSupportedContent">

       <form className=" ms-5 w-25 ">
           <div className="input-group p-1 border rounded-3 ">
               <div classNameName="input-group-text ">
                  <span className="ps-1" >{icon.search}</span>
                 <input
                   className=" border-0 bg-transparent ms-2" 
                   type="text"
                   value={query}
                   onChange={handleSearch}
                   placeholder="search for anything..." 
                  //  aria-label="search" 
                  //  onChange={handleInputChange}            
                   />                    
               </div>
            </div>
       </form>

  {/* end of search bar  */}

       <div className="collapse navbar-collapse justify-content-end me-5 " id="navbarNav">
           <ul className="navbar-nav ">
             <li className="nav-item">
               <Link className="nav-link " aria-current="page" to="#">{icon.calender}</Link>
             </li>
             <li className="nav-item">
               <Link className="nav-link" to="#">{icon.notification}</Link>
             </li>

           </ul>
        </div>


        {/* profile picture */}

        <div className="navbar-text ms-auto d-flex align-items-center justify-content-center">
            <div className="profile-details d-flex flex-column pt-2 me-2">
              <span className="profile-name text-black">Charles Doe:</span>
              <span className="profile-country text-black">United States</span>
            </div>

            <div className="entre-navbar-profile-pic-container ">
            
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle"
               data-bs-toggle="dropdown"
               to="#" role="button"
                aria-expanded="false">
               <img src={Image} alt='pic here' className="navbar-profile-pic"/>
              </Link>
              <ul class="dropdown-menu">
                <li><Link class="dropdown-item" to="/entreprofile">Profile Page</Link></li>
                <li><Link class="dropdown-item" to="/profileform">Settings</Link></li>
                <li><hr class="dropdown-divider"/></li>
                <li><Link class="dropdown-item" to="/logout">Log Out</Link></li>
              </ul>
             </li>

            </div>
         </div>


    </div>
  </div>
</nav>
</div>

    )
    
}