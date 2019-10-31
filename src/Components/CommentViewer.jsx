import React, { Component } from 'react';
import * as API from '../API';
import CommentAdder from './CommentAdder';
import CommentCard from './CommentCard';

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
          return {
            comments: [...response.data.comment, ...currentState.comments]
          };
        });
      })
      .catch(console.dir);
  };

  handleDeleteComment = comment_id => {
    this.setState(prevState => {
      let copiedState = prevState.comments.map(comment => ({ ...comment }));
      copiedState = prevState.comments.filter(comment => {
        return comment.comment_id !== comment_id;
      });

      return { comments: copiedState };
    });
    API.deleteCommentByCommentId(comment_id).then(() => {
      console.log('comment deleted');
    });
  };

  render() {
    const { comments } = this.state;
    return (
      <div>
        <CommentAdder
          loggedInUser={this.props.loggedInUser}
          addComment={this.addComment}
          article_id={this.props.article_id}
        />
        <ul key="commentList">
          {comments.map(comment => {
            return (
              <CommentCard
                loggedInUser={this.props.loggedInUser}
                changeCommentVotes={this.changeCommentVotes}
                handleDeleteComment={this.handleDeleteComment}
                comment={comment}
                key={comment.comment_id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
