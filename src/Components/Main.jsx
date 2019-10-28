import React, { Component } from 'react';
import * as API from '../API';
import ArticleList from './ArticleList';
// import ArticleList from './ArticleList';

export default class Main extends Component {
  state = {
    articles: [],
    selectedTopic: 'all'
  };

  componentDidMount() {
    API.axiosGetArticles().then(response => {
      this.setState({
        articles: response.articles
      });
    });
  }

  filterByTopic = selectedTopic => {
    if (selectedTopic === 'all') {
      selectedTopic = '';
    }
    this.setState({ selectedTopic });
  };
  render() {
    return <ArticleList articles={this.state.articles} />;
  }
}
