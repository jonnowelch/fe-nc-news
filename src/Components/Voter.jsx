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
          disabled={this.state.voteChange === 1 ? true : false}
          onClick={() => {
            this.handleClick(1);
          }}
          id="Upvoter"
        >
          Upvote
          <span role="img" aria-label="up-arrow">
            ⏫
          </span>
        </button>
        <button
          disabled={this.state.voteChange === -1 ? true : false}
          onClick={() => {
            this.handleClick(-1);
          }}
          id="Downvoter"
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
