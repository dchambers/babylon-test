import React, { Component } from 'react';
import Checkbox from './Checkbox';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    radio: false,
    internet: true
  };

  handleCheck(checkProp, value) {
    this.setState({
      [checkProp]: value
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          How did you hear about us:<br/>
          Radio: <Checkbox checked={this.state.radio} onCheck={this.handleCheck.bind(this, 'radio')}/><br/>
          Internet: <Checkbox checked={this.state.internet} onCheck={this.handleCheck.bind(this, 'internet')}/>
        </p>
      </div>
    );
  }
}

export default App;
