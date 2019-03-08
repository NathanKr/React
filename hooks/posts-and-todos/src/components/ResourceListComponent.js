import React, { Component } from "react";
import axios from "axios";

class ResourceListComponent extends Component {
  baseUrl = "https://jsonplaceholder.typicode.com/";
  state = { resources: [] };

  fetchResources = () => {
    const url = `${this.baseUrl}${this.props.resource}`;
    axios
      .get(url)
      .then(response => {
        this.setState({ resources: response.data });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.fetchResources();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.resource !== this.props.resource) {
      this.fetchResources();
    }
  }

  render() {
    return (
      <div>
        <h2>{this.props.resource}</h2>
        <p>{this.state.resources.length}</p>
      </div>
    );
  }
}

export default ResourceListComponent;
