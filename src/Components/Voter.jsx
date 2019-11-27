import React, { Component } from "react";
import * as API from "../API";

export default class Voter extends Component {
  state = {
    voteChange: 0
  };

  handleClick = vote => {
    this.setState(prevState => {
      return { voteChange: prevState.voteChange + vote };
    });
    if (this.props.beingUpdated === "article") {
      API.changeArticleVotes(this.props.id, vote);
    } else {
      API.changeCommentVotes(this.props.id, vote);
    }
  };

  render() {
    const { votes } = this.props;
    return (
      <div className="vote-flex">
        <div>
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
        </div>
        Votes : {votes + this.state.voteChange}
        <div>
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
        </div>
      </div>
    );
  }
}
