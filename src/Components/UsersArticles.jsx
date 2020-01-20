import React, { Component } from "react";
import * as API from "../API";
import UsersArticlesCard from "./UsersArticlesCard";
import Loading from "./Loading";

export default class UsersArticles extends Component {
  state = {
    articles: [],
    isLoading: true
  };

  componentDidMount() {
    API.axiosGetArticles(undefined, undefined, this.props.username).then(
      ({ articles }) => {
        this.setState({
          articles,
          isLoading: false
        });
      }
    );
  }
  render() {
    if (this.state.isLoading) {
      return <Loading />;
    }
    return (
      <div>
        <ul key="usersArticleList">
          {this.props.username}'s articles:{" "}
          {this.state.articles.length &&
            this.state.articles.map(article => {
              return (
                <UsersArticlesCard
                  article={article}
                  key={article.article_id}
                  user={this.props.user}
                />
              );
            })}
        </ul>
      </div>
    );
  }
}
