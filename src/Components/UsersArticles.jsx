import React, { Component } from 'react';
import * as API from '../API';
import UsersArticlesCard from './UsersArticlesCard';

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
      return <h1>Loading...</h1>;
    }
    return (
      <div>
        <ul key="usersArticleList">
          Articles:{' '}
          {this.state.articles.length &&
            this.state.articles.map(article => {
              return (
                <UsersArticlesCard article={article} key={article.article_id} />
              );
            })}
        </ul>
      </div>
    );
  }
}
