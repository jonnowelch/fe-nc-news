import React, { Component } from 'react';
// import * as API from '../API';

export default class ArticleVote extends Component {
  state = {
    voteChange: 0
  };

  // voteOnArticle = () => {
  //   const { article_id } = this.props;
  //   API.updateArticleVote(article_id).then(() => {
  //     this.setState({ voteChange: 1 });
  //   });
  // };

  render() {
    return (
      <div>
        <form onSubmit={this.props.upVoteArticle}>
          Votes : {this.props.votes}
          <button onClick={this.upVoteArticle} id="articleUpvoter">
            Upvote
            <span role="img" aria-label="up-arrow">
              ⏫
            </span>
          </button>
        </form>
        <form onSubmit={this.props.downVoteArticle}>
          <button onClick={this.downVoteArticle} id="articleDownvoter">
            Downvote
            <span role="img" aria-label="down-arrow">
              ⏬
            </span>
          </button>
        </form>
      </div>
    );
  }
}

// disabled={voteChange === 0 > false : true}

{
  /* <span role="img" aria-label="sheep">🐑</span> */
}
