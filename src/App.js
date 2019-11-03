import React, { Component } from 'react';
import Header from './Components/Header';
import './App.css';
import Home from './Components/Home';
import { Router } from '@reach/router';
import SingleArticle from './Components/SingleArticle';
import ErrorPage from './Components/ErrorPage';
import TopicsPage from './Components/TopicsPage';
import UserPage from './Components/UserPage';

export default class App extends Component {
  state = {
    loggedInUser: ''
  };

  loginUserFunction = loggedInUser => {
    this.setState({ loggedInUser });
  };

  logoutUserFunction = () => {
    this.setState({ loggedInUser: '' });
  };

  render() {
    return (
      <div className="App">
        <Header
          loginUserFunction={this.loginUserFunction}
          handleSubmit={this.handleSubmit}
          loggedInUser={this.state.loggedInUser}
          logoutUserFunction={this.logoutUserFunction}
        />
        <Router>
          <Home path="/" />
          <Home path="/articles" />
          <SingleArticle
            path="/articles/:article_id"
            loggedInUser={this.state.loggedInUser}
          />
          <TopicsPage path="/topics" />
          <UserPage path="/users/:username" />
          <ErrorPage default />
        </Router>
      </div>
    );
  }
}
