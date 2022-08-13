import React, { Component } from "react";
import Comment from "./Comment";
import request from "./helper";
import "./css/style.css";
export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: null,
    };
  }

  async componentDidMount() {
    const comments = request(
      `https://jsonplaceholder.typicode.com/comments?postId=${this.props.activePost.id}`,
      "GET"
    );
    comments.then((comments) => {
      return this.setState({ comments });
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.activePost !== prevProps.activePost) {
      request(
        `https://jsonplaceholder.typicode.com/comments?postId=${this.props.activePost.id}`,
        "GET"
      ).then((comments) => {
        return this.setState({ comments });
      });
    }
  }

  render() {
    const { comments } = this.state;
    return (
      <div onClick={this.props.show} id="fullModalDiv">
        <div id="modal">
          {comments
            ? comments.map((comment, i) => (
                <Comment comment={comment} key={`comment${i}`} />
              ))
            : "loading..."}
        </div>
      </div>
    );
  }
}
