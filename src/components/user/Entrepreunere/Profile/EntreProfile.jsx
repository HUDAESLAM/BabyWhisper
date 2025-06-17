import React, { useState, useEffect } from "react";
import "./EntreProfile.css";
import EntreSideBar from "../../../sections/EntreSideBar/EntreSideBar";
import EntreNavBar from "../../../sections/EntreNavBar/EntreNavBar";
import ProjectProfileCards from "../../../sections/ProjectProfileCards/ProjectProfileCards";
import Image from "../../../../assets/a_user01_avatar.png";
import ProfileForm from "../ProfileForm/ProfileForm";
import { getUserById } from '../../../../Api/Endpoints/UserEndpoints';



export default function EntreProfile() {
 
  const [isEditingUser, setIsEditingUser] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState({});


  useEffect(() => {
    const fetchUser = async () => {
      if (user && user.id) {
        try {
          const response = await getUserById(user.id);
          setUser(response);
        } catch (error) {
          setError(error.message); 
        }
      }
    };

    fetchUser();
  }, [user.id]);




       const handleFormsubmit = async (user) => {
        try {
          if (isEditingUser) {
            const updateUser = { ...user};
            setUser(updateUser);
            setIsEditingUser(false);
          } else {
            console.log("Cannot create a new user when not editing");
          }
        } catch (err) {
          console.log("Error updating user:", err);
        }
      };


  const icons = {
    message: <i className="fa-solid fa-message"></i>,
    person: <i className="fa-solid fa-person"></i>,
    location: <i className="fa-solid fa-location-dot"></i>,
    email: <i className="fa-solid fa-envelope"></i>,
    phone: <i className="fa-solid fa-phone"></i>
  };

  return (
    <div className="container-fluid">
      <div><EntreNavBar/></div>
      <div className="row">
        <div className="col-lg-2">
          <EntreSideBar/>
        </div>

        <div className="entre-profile-content col-lg-3 rounded-3 shadow-sm p-3 mb-5">
          <div className="p-4 d-flex flex-column">
            <img src={Image} alt="Profile" className="w-75 h-75 rounded-circle mx-auto" />

            <div className="d-flex justify-content-evenly w-100">
              <button className="entre-message-icon border p-2 fs-6">{icons.message}</button>
              <h4 className="pt-2">{user.username || error }</h4>
            </div>

            <div className="entre-profile-body my-5">
              <h4 className="mb-3">About</h4>
              <div className="d-flex mb-2">
                <span className="pe-2">{icons.person}</span>
                <p>{user.role || "ENTREPRENEUR"}</p>
              </div>
              <div className="d-flex mb-2">
                <span className="pe-2">{icons.location}</span>
                <p>{user.country || "New york"}</p>
              </div>
              <div className="d-flex mb-2">
                <span className="pe-2">{icons.email}</span>
                <p>{user.email || "jasmine33@gmail.com"}</p>
              </div>
              <div className="d-flex mb-2">
                <span className="pe-2">{icons.phone}</span>
                <p>{user.phone || "99037689900"}</p>
              </div>
            </div>

            <div className="entre-buttons d-flex flex-column align-items-center">
              {user.role === 'ENTREPRENEUR' ? (
                 <button onClick={()=> setIsEditingUser(true)} className="Edit-btn btn w-75">Edit</button>
              ) : (
                <>
                  <button className="entre-invest-btn btn w-75 mb-3">Invest Me</button>
                  <button className="entre-follow-btn btn w-75 mb-3">Follow Me</button>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="content-section col-lg-7 col-sm-12 shadow-sm">
          <div className="about-section shadow-sm rounded-4 p-3 my-3 h-25 w-100">
            <h5 className="mb-4">Experience</h5>
            <p>{user.user_background || "No background"}</p>
          </div>

          <div className="about-section shadow-sm rounded-4 p-3 my-3 h-25 w-100">
            <h5 className="mb-4">User Informations</h5>
            <p> <span className="">languages : </span> {user.user_languages|| "English"}</p>
            <p> <span className="">Interests : </span> {user.user_interests|| "technology"}</p>

          </div>

          {isEditingUser ? (
            <ProfileForm
              user={user}
              onSubmit={handleFormsubmit}
              onCancel={() => setIsEditingUser(false)}
            />
          ) : (
            <div className="projects-section">
              <ProjectProfileCards />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


