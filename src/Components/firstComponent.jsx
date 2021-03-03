import { Component } from "react";
import '../Styles/firstComp.css';
import Nav from "../Components/nav.jsx";
import FirstCard from "./firstCard.jsx";

class FirstComp extends Component{
  render(){
    return(
      <div className="firstComp">
          <section className="first">
              <Nav></Nav>
              <FirstCard></FirstCard>
          </section>
      </div>
    );
  }
}

export default FirstComp;
