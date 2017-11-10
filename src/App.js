import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }
  async handleClick() {
    const { default: component } = await import("./Home");
    this.setState({
      component: component
    });
  }
  render() {
    const C = this.state.component;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.handleClick}> Get component </button>
        { C ? <C /> : null }
      </div>
    );
  }
}

export default App;
