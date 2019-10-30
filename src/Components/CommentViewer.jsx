import React, { Component } from 'react';
import * as API from '../API';
import CommentAdder from './CommentAdder';
import CommentDeleter from './CommentDeleter';

export default class CommentViewer extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    API.getCommentsByArticleID(this.props.article_id).then(({ comments }) => {
      this.setState({
        comments
      });
    });
  }

  addComment = (user, comment, articleID) => {
    API.postCommentToArticle(user, comment, articleID)
      .then(response => {
        this.setState(currentState => {
          console.log(response.data);
          return {
            comments: [...response.data.comment, ...currentState.comments]
          };
        });
      })
      .catch(console.dir);
  };

  deleteComment = comment_id => {
    API.deleteCommentByCommentId(comment_id).then(response => {
      this.setState(currentState => {
        return { comments: currentState.comments };
      });
    });
  };

  handleSubmitDelete = event => {};

  render() {
    const { comments } = this.state;
    return (
      <div>
        <CommentAdder
          addComment={this.addComment}
          article_id={this.props.article_id}
        />
        <CommentDeleter
          deleteComment={this.deleteComment}
          article_id={this.props.articleID}
        />
        <br></br>
        Comments:
        {comments.length &&
          comments.map(comment => {
            return (
              <p key={comment.comment_id}>
                {' '}
                <br></br>
                {comment.body} <br></br>
                {comment.author} <br></br>
                {comment.votes}
                <br></br>
                <button
                  type="submit"
                  id="deleteButton"
                  onSubmit={this.handleSubmitDelete}
                >
                  Delete Comment
                </button>
              </p>
            );
          })}
      </div>
    );
  }
}
