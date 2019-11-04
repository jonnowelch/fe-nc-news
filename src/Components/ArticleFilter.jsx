import React, { Component } from 'react';

export default class ArticleFilter extends Component {
  state = {
    sortBy: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.sortByOption(event.target.value);
  };

  render() {
    return (
      <label>
        Sort by:
        <select onChange={this.handleSubmit} id="sortBySelector">
          <option value="created_at"> Date Created</option>
          <option value="comment_count"> Comment Count</option>
          <option value="votes"> votes</option>
        </select>
      </label>
    );
  }
}
