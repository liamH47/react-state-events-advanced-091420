import React, { Component } from "react";
import BeyContainer from './Containers/BeyContainer'
import Favorites from './Containers/Favorites'
import beyArray from './api'
import "./App.css";

class App extends Component {

  state = {beyArray}

  clickHandler = (beyObj) => {
    let newArr = [...this.state.beyArray]
    newArr[newArr.indexOf(beyObj)].favorite = true 
    this.setState({
      beyArray: newArr
    })
  }

  antiHandler = (beyObj) => {
    let newArr = [...this.state.beyArray]
    newArr[newArr.indexOf(beyObj)].favorite = false
    this.setState({
      beyArray: newArr
    })
    window.alert("I got hot sauce in my bag, swag") 
  }

  render() {
    return (
      <div className="container" >
        <BeyContainer clickHandler={this.clickHandler} beyArray={this.state.beyArray} />
        <Favorites antiHandler={this.antiHandler} beyArray={this.state.beyArray}/>
      </div>
    );
  };
}
export default App;
