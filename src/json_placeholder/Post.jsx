import React, { Component } from "react";

export default class Post extends Component {
  constructor(props) {
    super(props);

    this.selectedPost = this.selectedPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }
  selectedPost() {
    this.props.selectedPost(this.props.post);
  }
  deletePost(e) {
    this.props.deletePost(this.props.post);
    e.stopPropagation();
  }
  render() {
    const { id, title, body } = this.props.post;
    return (
      <div onClick={this.selectedPost} className="onePost">
        <div className="titleDiv">
          <p>id-{id}.</p>
          <h4>{title}</h4>
          <h4 onClick={this.deletePost} className="deletePost">
            DELETE
          </h4>
        </div>
        <p>{body}</p>
      </div>
    );
  }
}
