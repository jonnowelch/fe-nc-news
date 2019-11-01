import React, { Component } from 'react';
import * as API from '../API';

export default class UsersList extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    API.getAllUsers().then(({ users }) => {
      this.setState({
        users
      });
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <select id="userDropdown">
            <option key="select user"> Select User</option>
            {this.state.users.map(user => {
              return <option key={user.username}> {user.username} </option>;
            })}
            >
          </select>
        </label>
        <button id="loginButton" type="submit">
          Login
        </button>
      </form>
    );
  }
}
