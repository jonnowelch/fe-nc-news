import React, { Component } from "react";

export default class LoginUser extends Component {
  state = {
    loggedInUser: ""
  };

  loginUser = event => {
    this.setState({ loggedInUser: "" });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.loginUserFunction(this.state.loggedInUser);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button id="loginButton" type="submit">
          Login
        </button>
      </form>
    );
  }
}
