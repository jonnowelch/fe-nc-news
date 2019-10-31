import React, { Component } from 'react';
import Header from './Components/Header';
import './App.css';
import Home from './Components/Home';
import { Router } from '@reach/router';
import SingleArticle from './Components/SingleArticle';
import ArticleList from './Components/ArticleList';
import ErrorHandler from './Components/ErrorHandler';

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
          <ArticleList path="/" />
          <SingleArticle
            path="/articles/:article_id"
            loggedInUser={this.state.loggedInUser}
          />

          <ErrorHandler default />
        </Router>
      </div>
    );
  }
}
