import React, { Component } from 'react';
import Header from './components/Header/Header.js';
import Star from './components/Star/Star.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
        <Star />
      </div>
    );
  }
}

export default App;
