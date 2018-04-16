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

    let logoStyle ={
      height: '100px'
    };

    let welcomeMessageStyle ={
      height: '300px'
    };
    return (
      <div className="App">
        <header className="App-header">     
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <img  src={persLogo} style={logoStyle}/>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        < img src={mainImage}/>
        <div className='well' >
          <p>Just to test the bootstrap setup </p>
          <a className='btn btn-danger btn-md'>test</a>
        </div>
      
      </div>
    );
  }
}

export default App;
