import React, { Component } from 'react';
import * as API from '../API';

export default class Voter extends Component {
  state = {
    voteChange: 0
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.props.beingUpdated === 'article') {
      API.changeArticleVotes(this.props.id, this.state.voteChange);
    } else {
      API.changeCommentVotes(this.props.id, this.state.voteChange);
    }
  };

  handleClick = vote => {
    this.setState(prevState => {
      return { voteChange: prevState.voteChange + vote };
    });
  };

  render() {
    const { votes } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        Votes : {votes + this.state.voteChange}
        <button
          onClick={() => {
            this.handleClick(1);
          }}
          id="articleUpvoter"
        >
          Upvote
          <span role="img" aria-label="up-arrow">
            ⏫
          </span>
        </button>
        <button
          onClick={() => {
            this.handleClick(-1);
          }}
          id="articleDownvoter"
        >
          Downvote
          <span role="img" aria-label="down-arrow">
            ⏬
          </span>
        </button>
      </form>
    );
  }
}

// disabled={voteChange === 0 > false : true}
