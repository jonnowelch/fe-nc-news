import React, { Component } from 'react';

export default class CommentAdder extends Component {
  state = {
    body: '',
    user: 'weegembump',
    articleID: 33
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.body && this.state.user !== '') {
      this.props.addComment(
        this.state.user,
        this.state.body,
        this.state.articleID
      );
      this.setState({
        body: '',
        user: 'weegembump',
        articleID: 33
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
          <input type="text" required onChange={this.handleCommentInput} />
        </label>
        <button type="submit" value="Submit Comment">
          Submit Comment
        </button>
      </form>
    );
  }
}
