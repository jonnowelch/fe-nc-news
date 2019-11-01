import React, { Component } from 'react';
import Header from './Components/Header';
import './App.css';
import Home from './Components/Home';
import { Router } from '@reach/router';
import SingleArticle from './Components/SingleArticle';
import ErrorPage from './Components/ErrorPage';
import TopicsPage from './Components/TopicsPage';

export default class App extends Component {
  state = {
    loggedInUser: 'weegembump'
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Home path="/" />
          <Home path="/articles" />
          <SingleArticle
            path="/articles/:article_id"
            loggedInUser={this.state.loggedInUser}
          />
          <TopicsPage path="/topics" />
          <ErrorPage default />
        </Router>
      </div>
    );
  }
}
