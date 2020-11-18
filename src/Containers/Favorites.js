import React, { Component } from "react";
import BeyCard from "../Components/BeyCard";


export default class Favorites extends Component {

  beyMap = () => {
    return this.props.beyArray.filter(beyObj => beyObj.favorite).map(beyObj => <BeyCard antiHandler={this.props.antiHandler} key={beyObj.id} beyObj={beyObj}/>)
  }

  render() {
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {this.beyMap()}
      </div>
    );
  }
}
