import React, { Component } from "react";

export default class CommentAdder extends Component {
  state = {
    body: "",
    user: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.body && this.props.loggedInUser !== "") {
      this.props.addComment(
        this.props.loggedInUser,
        this.state.body,
        this.props.article_id
      );
      this.setState({
        body: "",
        user: this.props.loggedInUser
      });
    }
  };

  handleCommentInput = event => {
    const { value } = event.target;
    this.setState({ body: value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label id="enterCommentText">
          <textarea
            id="enter-comment"
            type="text"
            placeholder="Please login to enter comment"
            required
            onChange={this.handleCommentInput}
            value={this.state.body}
          />
        </label>
        <button type="submit" value="Submit Comment" id="addCommentButton">
          Submit Comment
        </button>
      </form>
    );
  }
}
