import React, { Component } from "react";
import Comments from "./Comments";
import request from "./helper";
import Post from "./Post";
export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.activeUser,
      post: null,
      activePost: null,
    };
    this.selectedPost = this.selectedPost.bind(this);
    this.canShow = this.canShow.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  componentDidMount() {
    const post = request(
      `https://jsonplaceholder.typicode.com/posts?userId=${this.state.user.id}`,
      "GET"
    );
    post.then((post) => this.setState({ post }));
  }
  selectedPost(post) {
    this.setState({
      ...this.state,
      activePost: post,
    });
  }
  canShow() {
    this.setState({ ...this.state, activePost: null });
  }
  deletePost(postDel) {
    const post = this.state.post.filter((post) => post.id !== postDel.id);
    this.setState({ ...this.state, post: post });
  }
  render() {
    const { post, activePost } = this.state;
    console.log(post);
    return (
      <>
        <div className="fullDiv">
          {post ? (
            post.map((post, i) => (
              <Post
                key={`post${i}`}
                deletePost={this.deletePost}
                selectedPost={this.selectedPost}
                post={post}
              />
            ))
          ) : (
            <p>loading...</p>
          )}
        </div>
        {activePost && <Comments show={this.canShow} activePost={activePost} />}
      </>
    );
  }
}
