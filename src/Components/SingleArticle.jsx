import React, { Component } from "react";
import * as API from "../API";
import CommentViewer from "./CommentViewer";
import Voter from "./Voter";
import ErrorPage from "./ErrorPage";
import { Link } from "@reach/router";
// import logo from "../loading.gif";
import Loading from "./Loading";

export default class SingleArticle extends Component {
  state = {
    indivArticle: {},
    comment_count: 0,
    author: "",
    created_at: "",
    votes: 0,
    err: false,
    errMsg: "",
    errStatus: null,
    isLoading: true
  };

  componentDidMount() {
    API.getIndividualArticle(this.props.article_id)
      .then(response => {
        this.setState({
          indivArticle: response.article,
          comment_count: response.article.comment_count,
          author: response.article.author,
          created_at: response.article.created_at,
          votes: response.article.votes,
          title: response.article.title,
          isLoading: false
        });
      })
      .catch(err => {
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
    if (this.state.isLoading) {
      return <Loading />;
    }
    return (
      <div className="grid-container" id="singleArticle">
        <div className="grid-item item 6">{this.state.indivArticle.title}</div>
        <div className="grid-item item1"> {this.state.indivArticle.body}</div>
        <div className="grid-item item2">
          <Voter
            id={this.props.article_id}
            votes={this.state.votes}
            beingUpdated="article"
          ></Voter>
        </div>
        <div className="grid-item item3">
          {" "}
          Author:
          <Link to={`/users/${this.state.indivArticle.author}`}>
            {this.state.indivArticle.author}{" "}
          </Link>
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
