import React, { Component } from 'react';
import * as API from '../API';
import ArticleList from './ArticleList';
import TopicsDropdown from './TopicsDropdown';
import ArticleFilter from './ArticleFilter';
// import SingleArticle from './SingleArticle';
// import ArticleList from './ArticleList';L
// import { Router } from '@reach/router';

export default class Home extends Component {
  state = {
    articles: [],
    selectedTopic: '',
    selectedSortBy: 'created_at',
    user: 'Jonno'
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

  sortByOption = selectedSortBy => {
    this.setState({ selectedSortBy });
  };

  componentDidUpdate(prevProps, prevState) {
    const topicNameChange =
      prevState.selectedTopic !== this.state.selectedTopic;
    const sortByChange = prevState.selectedSortBy !== this.state.selectedSortBy;

    if (topicNameChange || sortByChange) {
      API.axiosGetArticles(
        this.state.selectedTopic,
        this.state.selectedSortBy
      ).then(response => {
        this.setState({ articles: response.articles });
      });
    }
  }

  render() {
    return (
      <div>
        <TopicsDropdown filterByTopic={this.filterByTopic} />
        <ArticleFilter sortByOption={this.sortByOption} />
        <ArticleList articles={this.state.articles} />
      </div>
    );
  }
}
