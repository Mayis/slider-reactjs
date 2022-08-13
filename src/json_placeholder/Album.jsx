import React, { Component } from "react";

export default class Album extends Component {
  constructor(props) {
    super(props);
    this.selectedAlbum = this.selectedAlbum.bind(this);
  }
  selectedAlbum() {
    this.props.selectedAlbum(this.props.album);
  }
  render() {
    const { title, id } = this.props.album;
    return (
      <div onClick={this.selectedAlbum}>
        <h4>{title}</h4>
      </div>
    );
  }
}
