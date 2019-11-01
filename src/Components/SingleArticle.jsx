import React, { Component } from 'react';
import * as API from '../API';
import CommentViewer from './CommentViewer';
import Voter from './Voter';
import ErrorPage from './ErrorPage';

export default class SingleArticle extends Component {
  state = {
    indivArticle: {},
    comment_count: 0,
    author: '',
    created_at: '',
    votes: 0,
    err: false,
    errMsg: '',
    errStatus: null
  };

  componentDidMount() {
    API.getIndividualArticle(this.props.article_id)
      .then(response => {
        this.setState({
          indivArticle: response.article,
          comment_count: response.article.comment_count,
          author: response.article.author,
          created_at: response.article.created_at,
          votes: response.article.votes
        });
      })
      .catch(err => {
        console.dir(err.response, 'err in article');
        this.setState({
          err: true,
          errMsg: err.response.data.msg,
          errStatus: err.response.status
        });
      });
  }

  render() {
    if (this.state.err)
      return (
        <ErrorPage
          err={this.state.err}
          errMsg={this.state.errMsg}
          errStatus={this.state.errStatus}
        />
      );
    return (
      <div className="grid-container" id="singleArticle">
        <div className="grid-item item1"> {this.state.indivArticle.body}</div>
        <div className="grid-item item2">
          <Voter
            id={this.props.article_id}
            votes={this.state.votes}
            beingUpdated="article"
          ></Voter>
        </div>
        <div className="grid-item item3">
          Author: {this.state.indivArticle.author}
        </div>
        <div className="grid-item item4">
          Created At: {this.state.indivArticle.created_at}
        </div>
        <div className="grid-item item5">
          <CommentViewer
            loggedInUser={this.props.loggedInUser}
            article_id={this.props.article_id}
          />
        </div>
        <div className="grid-item item6">
          Comment Count: {this.state.comment_count}
        </div>
      </div>
    );
  }
}

// this.setState({
//   errMsg: err.response.data.msg,
//   errStatus: err.response.status
