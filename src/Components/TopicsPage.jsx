import React, { Component } from 'react';
import * as API from '../API';

export default class TopicsPage extends Component {
  state = {
    topics: [],
    isLoading: true
  };

  componentDidMount() {
    API.getTopics().then(response => {
      this.setState({
        topics: response.topics,
        isLoading: false
      });
    });
  }
  render() {
    if (this.state.isLoading) {
      return <h1>Loading...</h1>;
    }
    const { topics } = this.state;
    return (
      <div>
        <h1> List of topics</h1>

        <h2>
          {topics[0].slug} : {topics[0].description} <br></br>
          {topics[1].slug} : {topics[1].description}
          <br></br>
          {topics[2].slug} : {topics[2].description}
        </h2>
      </div>
    );
  }
}
