import React, { Component } from 'react';
import * as API from '../API';
import CommentViewer from './CommentViewer';
import ArticleVote from './ArticleVote';
import CommentAdder from './CommentAdder';

export default class SingleArticle extends Component {
  state = {
    indivArticle: {},
    comment_count: 0,
    author: '',
    created_at: ''
  };

  componentDidMount() {
    API.getIndividualArticle(this.props.article_id).then(response => {
      this.setState({
        indivArticle: response.article,
        comment_count: response.article.comment_count,
        author: response.article.author,
        created_at: response.article.created_at
      });
    });
  }

  render() {
    return (
      <div className="grid-container" id="singleArticle">
        <div className="grid-item item1"> {this.state.indivArticle.body}</div>
        <div className="grid-item item2">
          <ArticleVote article_id={this.props.article_id} />
        </div>
        <div className="grid-item item3">
          Author: {this.state.indivArticle.author}
        </div>
        <div className="grid-item item4">
          Created At: {this.state.indivArticle.created_at}
        </div>
        <div className="grid-item item5">
          <CommentViewer article_id={this.props.article_id} />
        </div>
        <div className="grid-item item6">
          Comment Count: {this.state.comment_count}
        </div>
        <CommentAdder />
      </div>
    );
  }
}
