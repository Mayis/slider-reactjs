import React, { Component } from "react";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDelPost: false,
    };
    this.selectedPost = this.selectedPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.showDelPost = this.showDelPost.bind(this);
  }
  showDelPost(e) {
    e.stopPropagation();
    this.setState({ showDelPost: !this.state.showDelPost });
  }
  selectedPost() {
    this.props.selectedPost(this.props.post);
  }
  deletePost(e) {
    e.stopPropagation();
    this.props.deletePost(this.props.post);
    this.showDelPost(e);
  }
  render() {
    const { showDelPost } = this.state;
    const { id, title, body } = this.props.post;
    return (
      <>
        <div onClick={this.selectedPost} className="onePost">
          <div className="titleDiv">
            <p>id-{id}.</p>
            <h4>{title}</h4>
            <h4 onClick={this.showDelPost} className="deletePost">
              DELETE
            </h4>
          </div>
          <p>{body}</p>
        </div>
        {showDelPost && (
          <div id="fullDel">
            <div className="delDiv">
              <p onClick={this.deletePost}>YES</p>{" "}
              <p onClick={this.showDelPost}>NO</p>
            </div>
          </div>
        )}
      </>
    );
  }
}
