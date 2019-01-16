import React, { Component } from 'react';

class Greeting extends Component {
    render() {
      return (
        <p>{this.props.greeting} {this.props.name}</p>
      );
    }
  }

export default Greeting;