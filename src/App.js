import React from 'react';
import Header from './Components/Header';
import './App.css';
import Home from './Components/Home';
import { Router } from '@reach/router';
import SingleArticle from './Components/SingleArticle';
import ArticleList from './Components/ArticleList';
// import ArticleList from './Components/ArticleList';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Home path="/" />
        <ArticleList path="/" />
        <SingleArticle path="/articles/:article_id" />
      </Router>
    </div>
  );
}

export default App;
