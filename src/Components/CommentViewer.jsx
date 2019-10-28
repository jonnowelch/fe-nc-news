import React, { Component } from 'react';
import * as API from '../API';

export default class CommentViewer extends Component {
  state = {
    comments: {}
  };

  componentDidMount() {
    API.getCommentsByArticleID(this.props.article_id).then(comments => {
      this.setState({
        comments
      });
    });
  }
  render() {
    const { comments } = this.state.comments;
    return (
      <div>
        <br></br>
        Comments:
        {comments &&
          comments.map(comment => {
            return (
              <p key={comment.comment_id}>
                {comment.body}
                {comment.author}
                {comment.votes}
              </p>
            );
          })}
      </div>
    );
  }
}
