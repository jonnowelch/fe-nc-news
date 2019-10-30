import React, { Component } from 'react';

export default class CommentAdder extends Component {
  state = {
    body: '',
    user: 'weegembump'
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.body && this.state.user !== '') {
      this.props.addComment(
        this.state.user,
        this.state.body,
        this.props.article_id
      );
      this.setState({
        body: '',
        user: 'weegembump'
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
        <label>
          Enter Comment:
          <input
            type="text"
            required
            onChange={this.handleCommentInput}
            value={this.state.body}
          />
        </label>
        <button type="submit" value="Submit Comment">
          Submit Comment
        </button>
      </form>
    );
  }
}
