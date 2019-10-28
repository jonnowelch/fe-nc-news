import React, { Component } from 'react';
import * as API from '../API';

export default class ArticleVote extends Component {
  state = {
    votes: 0
  };

  componentDidMount() {
    API.getIndividualArticle(this.props.article_id).then(response => {
      this.setState({
        votes: response.article.votes
      });
    });
  }

  render() {
    return <div id="articleVoter">Votes : {this.state.votes}</div>;
  }
}
