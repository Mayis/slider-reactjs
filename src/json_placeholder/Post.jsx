import React, { Component } from "react";

export default class Post extends Component {
  constructor(props) {
    super(props);

    this.selectedPost = this.selectedPost.bind(this);
  }
  selectedPost() {
    this.props.selectedPost(this.props.post);
  }
  render() {
    const { id, title, body } = this.props.post;
    return (
      <div onClick={this.selectedPost} className="onePost">
        <div className="titleDiv">
          <p>{id}.</p>
          <h4>{title}</h4>
        </div>
        <p>{body}</p>
      </div>
    );
  }
}
