import React from "react";
import BeyCard from '../Components/BeyCard'
import beyArray from '../api'

class BeyContainer extends React.Component {

  beyMap = () => {
    return beyArray.map(beyObj => <BeyCard beyObj={beyObj} key={beyObj.id}/>)
  }

  render() {
    console.log(beyArray)
    return (
      <div className="index">
        <h1>Index</h1>
        {this.beyMap()}
      </div>
    );
  }
}

export default BeyContainer;
