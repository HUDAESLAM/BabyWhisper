import React from 'react';
import { useState } from 'react';
import './CryFeedBack.css'

export default function CryFeedBack(){
  const [rating, setRating] = useState(() => parseInt(localStorage.getItem('userRating')) || 0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(() => localStorage.getItem('submitted') === 'true');

  const handleSubmit = () => {
    if (rating > 0 && !submitted) {
      localStorage.setItem('userRating', rating);
      localStorage.setItem('submitted', 'true');
      setSubmitted(true);
    } else if (submitted) {
      alert("You have already submitted your rating.");
    } else {
      alert("Please select a rating before submitting.");
    }
  };

   return(
    <>
        <div className='container-fluid'>
            <div className='rate-main-body border border-secondary border-3 rounded-5 px-5 '>
                <div className='cry-rate d-flex flex-column justify-content-center align-items-center mt-5'>
                         <div className='rate-text '>
                            <p>Pleas Rate your experience</p>
                            <p style={{opacity:"0.5"}}>Pleas Rate your experience</p>
                            <p style={{opacity:"0.2"}}>Pleas Rate your experience</p>

                         </div>
                         <div className='rate-stars mt-4'>
                         {[1, 2, 3, 4, 5].map((star) => (
                             <i
                               key={star}
                               className={`fa-star ${star <= (hover || rating) ? 'fas' : 'far'}`}
                               onClick={() => setRating(star)}
                               onMouseEnter={() => setHover(star)}
                               onMouseLeave={() => setHover(0)}
                             ></i>
                             ))}

                         </div>

                         <div className='rate-button'>
                         <button
                            className={`btn rounded-pill px-4 py-2 my-3 border border-2 ${submitted ? 'btn-success text-white' : ''}`}
                            onClick={handleSubmit}
                            disabled={submitted}
                             >
                            {submitted ? 'Done' : 'Rate'}
                            </button>
                         </div>


                         <div className='skip-rate d-flex align-self-end'>
                            <button className='btn  d-flex flex-row pe-3'>
                            <p>skip</p>
                            <i className="fa-solid fa-arrow-right  pt-2 ps-1"></i>
                            </button>
                            {/* <p>skip</p>
                            <i className="fa-solid fa-arrow-right  pt-2 ps-1"></i> */}
                         </div>
                </div>

                

            </div>
            
        </div>
    </>
   );
}