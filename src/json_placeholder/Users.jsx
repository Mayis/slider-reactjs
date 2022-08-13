import React, { Component } from "react";
import request from "./helper";
import User from "./User";
import "./css/style.css";
import Posts from "./Posts";
import Albums from "./Albums";
export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUser: null,
      post: false,
      album: false,
      users: [],
    };
    this.activeUser = this.activeUser.bind(this);
    this.activePost = this.activePost.bind(this);
    this.activeAlbum = this.activeAlbum.bind(this);
  }
  componentDidMount() {
    const users = request("https://jsonplaceholder.typicode.com/users", "GET");
    users.then((users) => this.setState({ users }));
  }
  activeUser(activeUser) {
    this.setState({ activeUser });
  }
  activePost() {
    this.setState({ ...this.state, post: true });
  }
  activeAlbum() {
    this.setState({ ...this.state, album: true });
  }
  render() {
    const { users, activeUser, post, album } = this.state;
    console.log(album);
    return post ? (
      <Posts activeUser={activeUser} />
    ) : album ? (
      <Albums activeUser={activeUser} />
    ) : (
      <div id="mainUsers">
        {users.map((user) => (
          <User
            activeAlbum={this.activeAlbum}
            activePost={this.activePost}
            oneUser={this.activeUser}
            key={user.id}
            user={user}
          />
        ))}
      </div>
    );
  }
}
