import React, { Component } from "react";

export default class User extends Component {
  constructor(props) {
    super(props);
    this.oneUserPost = this.oneUserPost.bind(this);
    this.oneUserAlbum = this.oneUserAlbum.bind(this);
  }
  oneUserPost() {
    this.props.activePost();
    this.props.oneUser(this.props.user);
  }
  oneUserAlbum() {
    this.props.activeAlbum();
    this.props.oneUser(this.props.user);
  }
  render() {
    const { name, email, phone } = this.props.user;
    return (
      <div className="oneUser">
        <h3>{name}</h3>
        <p>{email}</p>
        <p>{phone}</p>
        <div className="select">
          <p onClick={this.oneUserPost}>POSTS</p>
          <p onClick={this.oneUserAlbum}>ALBUMS</p>
        </div>
      </div>
    );
  }
}
