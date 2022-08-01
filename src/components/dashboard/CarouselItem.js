import React, {Component} from 'react'
import "../../css/Carousel.css"
import eventData from "../../event-info.json"
// ICON IMPORTS
import Icon1 from "../../assets/gameIcons/StrongMan_icon.jpeg"
import Icon2 from "../../assets/gameIcons/SkeeBall_icon.jpeg"
import Icon3 from "../../assets/gameIcons/JustDance_icon.jpg"
import * as deviceMotion from "../../events/deviceMotion"



class CarouselItem extends Component {
  
  // renders icon based on button text
  renderIcon = () => {
      // eslint-disable-next-line
    switch(this.props.id) {
      case 0: return <img src={Icon1} alt='Strong Man' className='Game_icon'/>
      case 1: return <img src={Icon2} alt='Skeeball' className='Game_icon'/>
      case 2: return <img src={Icon3} alt='Just Dance' className='Game_icon'/>
      }
  }
  callEvent = () => {
    deviceMotion.getGyro(); 
  }

  render() {
    return (
      <div className='CarouselItem_Container'>
          {this.renderIcon()}
          <div> 
              {/* 1. game title
                  2. game desc
                  3. play button*/}
              <h1>{eventData[this.props.id].event_name}</h1>
              <p>{eventData[this.props.id].event_description}</p>
              <button onClick={() => this.callEvent()} className='play-btn'>
                  <span>Play {eventData[this.props.id].event_name}!</span>
              </button>  
          </div>
      </div>
    )
  }
}


export default CarouselItem