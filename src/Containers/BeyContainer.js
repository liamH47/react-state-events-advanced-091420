import React from "react";
import BeyCard from '../Components/BeyCard'

class BeyContainer extends React.Component {



  beyMap = () => this.props.beyArray.map(beyObj => <BeyCard clickHandler={this.props.clickHandler} key={beyObj.id} beyObj={beyObj}/>) 

  render() {
    return (
      <div className="index">
        <h1>Index</h1>
        {this.beyMap()}
      </div>
    );
  }
}

export default BeyContainer;
