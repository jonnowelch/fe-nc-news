import React, { Component } from 'react';

export default class ArticleFilter extends Component {
  state = {
    sortBy: ''
  };

  // handleSelectSortBy = event => {
  //   console.log(event.target.value);
  //   this.setState({ sortBy: event.target.value });
  // };

  handleSubmit = event => {
    // console.dir(event.target.value);
    event.preventDefault();
    this.props.sortByOption(event.target.value);
  };

  render() {
    return (
      <label>
        Order to be sorted by:
        <select onChange={this.handleSubmit} id="sortBySelector">
          <option value="created_at"> Date Created</option>
          <option value="comment_count"> Comment Count</option>
          <option value="votes"> votes</option>
        </select>
      </label>
    );
  }
}
