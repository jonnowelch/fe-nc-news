import React, { Component } from 'react';
import * as API from '../API';
import CommentAdder from './CommentAdder';

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

  addComment = (user, comment, articleID) => {
    API.postCommentToArticle(user, comment, articleID)
      .then(response => {
        console.log(response);
        this.setState(currentState => {
          return {
            comments: { ...currentState.comments, response }
          };
        });
      })
      .catch(console.dir);
  };
  render() {
    const { comments } = this.state.comments;
    return (
      <div>
        <CommentAdder addComment={this.addComment} />
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
