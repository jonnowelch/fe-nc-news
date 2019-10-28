import React, { Component } from 'react';
import * as API from '../API';
import ArticleList from './ArticleList';
import TopicsDropdown from './TopicsDropdown';
// import SingleArticle from './SingleArticle';
// import ArticleList from './ArticleList';L
// import { Router } from '@reach/router';

export default class Home extends Component {
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

  componentDidUpdate(prevProps, prevState) {
    if (this.state.selectedTopic !== prevState.selectedTopic) {
      API.axiosGetArticles(this.state.selectedTopic).then(response => {
        this.setState({ articles: response.articles });
      });
    }
  }
  render() {
    return (
      <div>
        <TopicsDropdown filterByTopic={this.filterByTopic} />
        <ArticleList articles={this.state.articles} />
      </div>
    );
  }
}
