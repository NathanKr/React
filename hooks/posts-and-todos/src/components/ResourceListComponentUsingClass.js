import React, { Component } from "react";
import axios from "axios";

class ResourceListComponentUsingClass extends Component {
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
    const resourcesElements = (
      <ul>
        {this.state.resources.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    );

    return (
      <div>
        <h2>{this.props.resource}</h2>
        {resourcesElements}
      </div>
    );
  }
}

export default ResourceListComponentUsingClass;
