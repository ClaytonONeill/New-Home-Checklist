import React, { Component } from 'react';

class Bathroom extends Component {
  render () {
    return (
      <div className="contain-all">
        <div className="title-container">
         <h1 onClick={this.props.showBathroom}>Bathroom</h1>
        </div>
        <div className={this.props.displayBathroom ? "checklist-container-show" : "checklist-container"}>
          <ul>
            <li className="list-item">Does the toilet flush?</li>
            <li className="list-item">Does the shower/tub have running water?</li>
            <li className="list-item">How is the water temperature?</li>
            <li className="list-item">How is the water pressure?</li>
            <li className="list-item">Is there cabinet space?</li>
            <li className="list-item">Do the outlets work?</li>
            <li className="list-item">Do the lights work?</li>
            <li className="list-item">Does the tub plug work?</li>
            <li className="list-item">Are there signs of mold?</li>
            <li className="list-item">Is there tile damage?</li>
            <li className="list-item">Is the shower rod broken?</li>
          </ul>
          <button type="button" className="btn btn-success">Complete?</button>
        </div>
      </div>
    )
  }
}

export default Bathroom;
