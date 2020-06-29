// INITIAL MODULES
import React, { Component } from 'react';

// STYLES
import './App.css';

// COMPONENTS
import Main from './components/Main.jsx'

class App extends Component {
  render () {
    return (
      <div className="app-container">
        <Main />
      </div>
    );
  }
}

export default App;
