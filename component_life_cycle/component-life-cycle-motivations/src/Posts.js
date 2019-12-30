import React, { Component } from "react";
import axios from "axios";

class Posts extends Component {
  state = { len: null };

  getLength = () => {
    axios
      .get(this.props.url)
      .then(res => this.setState({ len: res.data.length }))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    console.log("Posts componentDidMount");
    this.getLength();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) {
      console.log("Posts componentDidUpdate");
      this.getLength();
    }
  }

  render() {
    console.log("Posts render");
    return (
      <div>
        <p>length : {this.state.len}</p>
      </div>
    );
  }
}

export default Posts;
