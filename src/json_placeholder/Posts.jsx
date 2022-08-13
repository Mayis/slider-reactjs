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
  render() {
    const { post, activePost } = this.state;

    return (
      <>
        <div className="fullDiv">
          {post ? (
            post.map((post, i) => (
              <Post
                key={`post${i}`}
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
