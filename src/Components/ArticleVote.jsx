import React, { Component } from 'react';
import * as API from '../API';

export default class ArticleVote extends Component {
  state = {
    voteChange: 0
  };

  voteOnArticle = () => {
    const { article_id } = this.props;
    API.updateArticleVote(article_id).then(() => {
      this.setState({ voteChange: 1 });
    });
  };

  render() {
    return (
      <form>
        Votes : {this.props.votes} <br></br>
        <button onClick={this.voteOnArticle} id="articleVoter">
          Upvote
        </button>
      </form>
    );
  }
}

// disabled={voteChange === 0 > false : true}
