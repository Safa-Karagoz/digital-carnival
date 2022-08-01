import React from 'react'
import { useNavigate } from "react-router-dom";
import '../App.css'


const RouterBack = () => {
  let navigate = useNavigate();
    return (
        <>
          <button onClick={() => navigate(-1)} className='back-btn'> 
            &#60; Back
          </button>
        </>
    );
}

export default RouterBack