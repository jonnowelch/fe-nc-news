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
          Upvote ⏫
        </button>
        <button id="downvoteCommentButton">Downvote ⏬ </button>
      </form>
    );
  }
}
