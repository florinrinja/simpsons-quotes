import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//import Quote from "./Quote";
import Quotes from "./Quotes";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isWorking: true,
    };
  }

  toggleShow = () => {
    this.setState(state => ({ isWorking: !state.isWorking }));
    
  };

  render() {
    let greeting = "He's working";
    let resting="He's resting";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} 
          className={
        (this.state.isWorking ? "App-logo" : "not-working")
      } alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        
   
      <div>
        {this.state.isWorking ? <Greeting greeting={greeting} /> : <Resting resting={resting} />}
        <Button onClick={this.toggleShow} />
      </div>

        <Quotes
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
       
      </div>
    );
  }
}

const Button = ({ onClick }) => (
  <button onClick={onClick} type="button">
    Homer state
  </button>
);

const Greeting = ({ greeting }) => <h1>{greeting}</h1>;
const Resting = ({resting}) => <h1>{resting}</h1>

export default App;