import React, { Component } from 'react';

class Bathroom extends Component {
  render () {
    return (
      <div className="contain-all">
        <div className="title-container">
         <h1 onClick={this.props.showbathroom}>Bathroom</h1>
        </div>
        <div className={this.props.displaybathroom ? "checklist-container-show" : "checklist-container"}>
          <ul>
            <li className="list-item">Running water?</li>
            <li className="list-item">Water temperature changes?</li>
            <li className="list-item">Faucet moves?</li>
            <li className="list-item">The lights work?</li>
            <li className="list-item">Walls are painted?</li>
            <li className="list-item">Garbage disposal?</li>
            <li className="list-item">Enough cabinet space?</li>
            <li className="list-item">Does the stove work?</li>
            <li className="list-item">Does the fridge/freezer work?</li>
            <li className="list-item">Does the microwave work?</li>
            <li className="list-item">Are there signs of mice/rats/cockroaches?</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Bathroom;
