// INITIAL MODULES
import React, { Component } from 'react';

// COMPONENTS
import Kitchen from './Kitchen.jsx';
import Bathroom from './Bathroom.jsx';

class Main extends Component {
  state = {
    displayKitchen: false,
    displayBathroom: false
  }

  showKitchen = () => {
    this.setState({
      displayKitchen: !this.state.displayKitchen
    })
  }

  showBathroom = () => {
    this.setState({
      displayBathroom: !this.state.displayBathroom
    })
  }

  render () {
    return (
      <div className="home-contain">
        <div className="home-h1-contain">
          <h1>What room are you in?</h1>
        </div>
        <div className="button-container">
          <Kitchen
            showKitchen={this.showKitchen}
            displayKitchen={this.state.displayKitchen}
          />
          <Bathroom
            showBathroom={this.showBathroom}
            displayBathroom={this.state.displayBathroom}
          />
        </div>
      </div>
    )
  }
}

export default Main;
