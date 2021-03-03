import { Component } from "react";
import FirstComp from "./Components/firstComponent.jsx";
import SecondComp from "./Components/secondComponent.jsx";
import './App.css';


class App extends Component{
  render(){
    return(
      <div className="App">
        <FirstComp/>
        <SecondComp/>
      </div>
    );
  }
}

export default App;
