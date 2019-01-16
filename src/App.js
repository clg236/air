import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Component/Greeting';

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        greetings: ['Hello', '你好', 'Marhaba', 'hola'],
        name: ['Christian', 'Russel', 'Yousra', 'Diego']
      }
  }
  render() {
    return (
      <p>Hello!</p>
    );
  }
};

export default App;
