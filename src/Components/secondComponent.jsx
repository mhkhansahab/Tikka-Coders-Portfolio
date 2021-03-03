import { Component } from "react";
import '../Styles/secondComp.css';
import SecondCard from "./secondCard.jsx";

class SecondComp extends Component{
  render(){
    return(
      <div className="secondComp">
          <section className="second">
              <SecondCard></SecondCard>
          </section>
      </div>
    );
  }
}

export default SecondComp;
