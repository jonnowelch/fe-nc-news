import React, { Component } from 'react';

export default class Errors extends Component {
  state = {
    err: null,
    msg: null
  };

  render() {
    // return this.state.err ? (
    //   <h1> Something went wrong</h1>
    // ) : (
    //   this.props.children
    // );
    return 'hello2';
  }
}
