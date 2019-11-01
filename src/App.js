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
    loggedInUser: 'weegembump'
  };

  handleSubmit = event => {
    console.log(event);
    event.preventDefault();
    this.setState({ loggedInUser: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <Header
          loggedInUser={this.loggedInUser}
          handleSubmit={this.handleSubmit}
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
