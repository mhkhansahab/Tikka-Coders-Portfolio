import { Component } from "react";
import Paper from '@material-ui/core/Paper';
import "../Styles/secondCard.css";
import "../Styles/animatedText.css";
import "./AOS.js";
import sherry from "../Assets/sherry3.jpg";
import ijlal from "../Assets/ijlal.jpg";
import saad from "../Assets/saad.jpg";
import hamza from "../Assets/hamza.jpg";

class SecondCard extends Component{
  
    render(){
      return(
        <div className="mainsCard" data-aos="fade-right" ata-aos-duration="5000">
            <Paper elevation={6} className = "myscard">
              <span id="tikka-title">OUR SQUAD</span>
              <div className = "imgIcons">
              <div id="foo" className = "person"><img src={sherry} alt="Shehryar"/><span id = "sherry"></span></div>
              <div id="foo" className = "person"><img src={ijlal} alt="Ijlal"/><span id = "ijlal"></span></div>
              <div id="foo" className = "person"><img src={saad} alt="Saad"/><span id = "saad"></span></div>
              <div id="foo" className = "person"><img src={hamza} alt="Hamza"/><span id = "hamza"></span></div>
              </div>
            </Paper>
        </div>
      );
    }
  }
  
  export default SecondCard;
  