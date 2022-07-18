import React from "react"
import "./css/GamePage.css"
import LightBulb from "../assets/gameIcons/LightBulb_icon.png" 
import AccountIcon from "../assets/gameIcons/Account_icon.png" 
const Header = () => {
  return (
    <div className="wrapper">
      <button className="tutorial_btn">
        Tutorial <img className="tutorial-image" src={LightBulb} alt="Tutorial"/>
      </button>
      <h1 className="header1">Select a Game!<br/>
        <span className="header2">Then use the code on screen to play!</span>
      </h1>
      <button className="account_btn">
        Account<img className="account-image" src={AccountIcon} alt="Account Settings"/>
      </button>
    <b/>
    </div>
   
  )
}

export default Header