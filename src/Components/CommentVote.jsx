import React, { Component } from 'react';

export default class CommentVote extends Component {
  state = {
    voteChange: 0
  };
  render() {
    return (
      <form onSubmit={this.props.changeCommentVotes}>
        <button
          // onClick={this.props.changeCommentVotes(this.comment_id)}
          id="upvoteCommentButton"
        >
          Upvote
          <span role="img" aria-label="up-arrow">
            ⏫
          </span>
        </button>
        <button id="downvoteCommentButton">
          Downvote
          <span role="img" aria-label="down-arrow">
            ⏬
          </span>
        </button>
      </form>
    );
  }
}
