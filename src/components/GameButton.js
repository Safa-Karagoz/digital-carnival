import React, {Component} from 'react'
import "./css/GamePage.css"
// ICON imports
import Icon1 from "../assets/gameIcons/StrongMan_icon.jpeg"
import Icon2 from "../assets/gameIcons/SkeeBall_icon.jpeg"
import Icon3 from "../assets/gameIcons/JustDance_icon.jpg"

class GameButton extends Component {
    onClick = () => { 
        console.log("Safa");
    }

    // renders icon based on button text
    renderIcon = () => {
        // eslint-disable-next-line
      switch(this.props.text) {
        case 'Strong Man': return <img src={Icon1} alt='Strong Man' className='gameIcon'/>
        case 'Skeeball': return <img src={Icon2} alt='Skeeball' className='gameIcon'/>
        case 'Just Dance': return <img src={Icon3} alt='Just Dance' className='gameIcon'/>
        }
    }
 
    render() {
        return(
            <button onClick={this.onClick} className='game_btn'>{this.props.text} {this.renderIcon()}</button>
        )
    }
 }
 
 
export default GameButton