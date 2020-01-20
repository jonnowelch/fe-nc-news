import React, { Component } from "react";
import * as API from "../API";
import ArticleList from "./ArticleList";
import TopicsDropdown from "./TopicsDropdown";
import ArticleFilter from "./ArticleFilter";
import ErrorPage from "./ErrorPage";
import Loading from "./Loading";

export default class Home extends Component {
  state = {
    articles: [],
    selectedTopic: "",
    selectedSortBy: "created_at",
    user: "weegembump",
    err: false,
    errMsg: "",
    errStatus: null,
    isLoading: true
  };

  componentDidMount() {
    API.axiosGetArticles().then(response => {
      this.setState({
        articles: response.articles,
        isLoading: false
      });
    });
  }

  filterByTopic = selectedTopic => {
    if (selectedTopic === "all") {
      selectedTopic = "";
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
    if (this.state.isLoading) {
      return <Loading />;
    }
    if (this.state.err)
      return (
        <ErrorPage
          err={this.state.err}
          errMsg={this.state.errMsg}
          errStatus={this.state.errStatus}
        />
      );
    if (this.state.isLoading) {
      return <Loading />;
    }
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
