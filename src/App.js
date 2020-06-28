import React, { Component } from 'react';

class App extends Component {
  state = {
    view: {
      page: 'home',
      pageTitle: 'Home Page'
    }
  }


  handleView = (view) =>  {

  }


  render () {
    return (
      <div>
        <h1>This is the home page</h1>
      </div>
    );
  }
}

export default App;
