import React, { Component } from 'react';
import logo from './logo.svg';
import persLogo from './../../images/pers_logo.svg';
import mainImage from './../../images/main-image.svg'; 

import './App.css';

class App extends Component {
  render() {
    let imgStyle = {
        height: '600px'
    };

    let welcomeMessageStyle ={
      height: '300px'
    };
    return (
      <div className="App">
        <header className="App-header">     
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        < img src={mainImage}/>
      
      </div>
    );
  }
}

export default App;
