import { Component } from "react";
import Paper from '@material-ui/core/Paper';
import "../Styles/firstCard.css";
import "./AOS.js";

class FirstCard extends Component{
  
    render(){
      return(
        <div className="mainCard" data-aos="fade-right" ata-aos-duration="5000">
            <Paper elevation={6} className = "myfcard">
              <div className="lines">
              <div title="404" className = "flicker">Writing Code for Humans</div>
              <br/>
              <h3>“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” ― Martin Fowler</h3>
              </div>
              </Paper>
        </div>
      );
    }
  }
  
  export default FirstCard;
  