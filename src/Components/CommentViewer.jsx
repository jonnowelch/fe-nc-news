import React, { Component } from 'react';
import * as API from '../API';
import CommentAdder from './CommentAdder';
import CommentDeleter from './CommentDeleter';

export default class CommentViewer extends Component {
  state = {
    comments: {}
  };

  componentDidMount() {
    console.log(this.props.article_id, 'this works CDM cviewer');
    API.getCommentsByArticleID(this.props.article_id).then(comments => {
      this.setState({
        comments
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.comments !== prevState.comments) {
      API.getComments(this.props.article_id).then(response => {
        this.setState({ comments: response.data });
      });
    }
  }

  addComment = (user, comment, articleID) => {
    console.log(articleID);
    API.postCommentToArticle(user, comment, articleID)
      .then(response => {
        this.setState(currentState => {
          return {
            comments: { ...currentState.comments, response }
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
    const { comments } = this.state.comments;
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
        {comments &&
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
