import React, { Component } from "react";
import * as API from "../API";
import UsersArticles from "./UsersArticles";
import Loading from "./Loading";

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
      return <Loading />;
    }
    return (
      <div>
        {name} <br></br>
        {username} <br></br>
        <img src={avatar_url} alt="user" />
        <UsersArticles username={this.props.username} user={this.state.user} />
      </div>
    );
  }
}
