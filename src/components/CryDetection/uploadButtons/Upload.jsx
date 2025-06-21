import React from "react";
import UploadIcon from '../../../assets/UploadIcon.png';
import './Upload.css';


export default function UploadButton({ onClick }) {
  return (
  <>
  
    <div className="min-h-screen bg-gradient-to-r from-white to-purple-100 flex flex-col items-center justify-center text-gray-800 font-sans">
      {/* Main Content */}
      <main className="text-center mt-20 px-4">
        
        <div className="upload-audio d-flex flex-column">
              <p className="mt-2">or</p>
              <div className="upload-audio-button" onClick={ onClick }>
                <button className="rounded-pill px-5 py-3 border border-0">Upload</button> 
                <img src={UploadIcon} alt="upload icon here"  className="border border-1 rounded-circle ms-2"/>
              </div>
              <p className="mt-3">Upload Audio</p>
              
        </div>
        
    
      </main>
    </div>
  </>
  );
}