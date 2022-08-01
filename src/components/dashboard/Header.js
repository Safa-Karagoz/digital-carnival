import React from "react"
import "../../css/GamePage.css"
import { NavLink } from "react-router-dom";
import LightBulb from "../../assets/leaderboard_icon.png" 
import AccountIcon from "../../assets/profile_icon.png" 

const Header = () => {
  return (
    <div className="wrapper">
      {/* LEADERBOARD LINK */}
      <NavLink to="/leaderboard" className=""> <img className="nav-btn-lead" src={LightBulb} alt="leaderboard"/> </NavLink>
      
      {/* TITLE  */}
      <h1 className="header1">Select a Game!<br/>
        <span className="header2">Then use the code on screen to play!</span>
      </h1>
     
      {/* ACCOUNT LINK */}
      <NavLink to="/account" className=""> <img className="nav-btn-acc" src={AccountIcon} alt="leaderboard"/> </NavLink>
    {/* <b/> */}
    </div>
   
  )
}


export default Header