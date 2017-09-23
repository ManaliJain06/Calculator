import React, { Component } from 'react';
import './App.css';
import './style.css';
import TestCalculator from './components/TestCalculator';

class App extends Component {
  render() {
    return (
      <div className="App">
            <TestCalculator/>
      </div>
    );
  }
}

export default App;
