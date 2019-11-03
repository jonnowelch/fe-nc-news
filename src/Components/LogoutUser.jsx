import React, { Component } from 'react';

export default class LogoutUser extends Component {
  state = {
    loggedInUser: ''
  };

  logoutUser = event => {
    this.setState({ loggedInUser: '' });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.logoutUserFunction(this.state.loggedInUser);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button id="logoutButton" type="submit">
          Logout
        </button>
      </form>
    );
  }
}
