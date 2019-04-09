import React, { Component } from 'react';
import './App.css';
import Business from './components/Business';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div>
          <Business />
        </div>
      </div>
    );
  }
}

export default App;
