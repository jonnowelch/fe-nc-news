import React, { Component } from 'react';
import * as API from '../API';
import ArticleList from './ArticleList';
import TopicsDropdown from './TopicsDropdown';
import ArticleFilter from './ArticleFilter';

export default class Home extends Component {
  state = {
    articles: [],
    selectedTopic: '',
    selectedSortBy: 'created_at',
    user: 'weegembump'
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
        <div className="dropdown-container">
          <div className="dropdown-item firstDropdown">
            <TopicsDropdown filterByTopic={this.filterByTopic} />
          </div>
          <div className="dropdown-item secondDropdown">
            <ArticleFilter sortByOption={this.sortByOption} />
          </div>
        </div>
        <div>
          <ArticleList articles={this.state.articles} />
        </div>
      </div>
    );
  }
}
