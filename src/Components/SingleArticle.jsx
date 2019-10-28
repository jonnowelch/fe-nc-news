import React, { Component } from 'react';
import * as API from '../API';
import CommentViewer from './CommentViewer';
import ArticleVote from './ArticleVote';

export default class SingleArticle extends Component {
  state = {
    indivArticle: {}
  };

  componentDidMount() {
    API.getIndividualArticle(this.props.article_id).then(response => {
      this.setState({
        indivArticle: response.article
      });
    });
  }

  render() {
    // console.log(this.props);
    return (
      <div className="grid-container" id="singleArticle">
        <div className="grid-item item1"> {this.state.indivArticle.body}</div>
        <div className="grid-item item2">
          <ArticleVote article_id={this.props.article_id} />
        </div>
        <div className="grid-item item3">Author: </div>
        <div className="grid-item item4">Created At</div>
        <div className="grid-item item5">
          <CommentViewer article_id={this.props.article_id} />
        </div>
      </div>
    );
  }
}

/* // return (
//     <div class="grid-container" id="singleArticle">
//       {this.state.indivArticle.body}
//       <br></br>
//       {this.state.indivArticle.votes}
//       <CommentViewer article_id={this.props.article_id} />
//       <ArticleVote article_id={this.props.article_id} />
//     </div>
//   );
// } */
