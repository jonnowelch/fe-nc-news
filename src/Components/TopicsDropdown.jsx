import React, { Component } from 'react';

export default class TopicsDropdown extends Component {
  state = {
    selectedTopic: 'all'
  };

  handleSelectTopic = event => {
    this.setState({ selectedTopic: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.filterByTopic(this.state.selectedTopic);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Select Topic
          <select onChange={this.handleSelectTopic} id="topicDropdown">
            <option key="all"> all</option>
            <option key="coding"> coding</option>
            <option key="football"> football</option>
            <option key="cooking"> cooking</option>
          </select>
        </label>
        <button id="topicFilterButton" type="submit">
          Show me that topic
        </button>
      </form>
    );
  }
}
