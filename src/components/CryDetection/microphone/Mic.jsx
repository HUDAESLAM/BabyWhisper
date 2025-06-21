import React from 'react';
import './Mic.css'
import { FaMicrophone } from "react-icons/fa6";

export default function Mic(){
    return(
        <>
            <div className='container-fluid'>    
                <div className="mic-circles d-flex justify-content-center  ">
                    <div className="big-circle rounded-circle d-flex justify-content-center align-items-center ">
                        <div className="middle-circle rounded-circle border border-5 p-2">
                            <div className="small-cirlce rounded-circle  m-4 border border-1">
                                <div className='mic-icon d-flex justify-content-center align-items-center pt-5' >
                                <FaMicrophone className='mic-icon'/>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}