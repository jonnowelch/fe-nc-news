import React, { Component } from 'react';
import * as API from '../API';
import UsersArticles from './UsersArticles';

export default class UserPage extends Component {
  state = {
    user: [],
    isLoading: true
  };

  componentDidMount() {
    API.getUserByUserID(this.props.username).then(response => {
      this.setState({
        user: response.user,
        isLoading: false
      });
    });
  }

  render() {
    const { name, username, avatar_url } = this.state.user;
    if (this.state.isLoading) {
      return <h1>Loading...</h1>;
    }
    return (
      <div>
        {name} <br></br>
        {username} <br></br>
        <img src={avatar_url} alt="user" />
        <UsersArticles username={this.username} />
      </div>
    );
  }
}
