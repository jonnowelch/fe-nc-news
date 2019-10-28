import React, { Component } from 'react';
import * as API from '../API';

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
    return (
      <div>
        {' '}
        {this.state.indivArticle.body}
        <br></br>
        {this.state.indivArticle.votes}
      </div>
    );
  }
}
