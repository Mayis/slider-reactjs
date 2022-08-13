import React, { Component } from "react";

export default class Comment extends Component {
  render() {
    const { name, email, body } = this.props.comment;
    return (
      <div className="oneComment">
        <h4>{name}</h4>
        <p>{email}</p>
        <p>{body}</p>
      </div>
    );
  }
}
