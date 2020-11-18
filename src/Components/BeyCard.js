import React, {Component} from "react";

class BeyCard extends Component {
  
  addFavorite = () => {
    this.props.clickHandler(this.props.beyObj)
  }

  removeFav = () => {
    this.props.antiHandler(this.props.beyObj) 
  }
 
  render() {
    return (
      <div className="card">
        <h2>
          {this.props.beyObj.name}
        </h2>
        <img onClick={this.props.beyObj.favorite ? this.removeFav : this.addFavorite} src={this.props.beyObj.img} alt={this.props.beyObj.name} />
      </div>
    );
  };
}
export default BeyCard;
