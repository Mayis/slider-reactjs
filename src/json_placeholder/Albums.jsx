import React, { Component } from "react";
import request from "./helper";
import "./css/style.css";
import Album from "./Album";
import Photos from "./Photos";

export default class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.activeUser,
      albums: null,
      activeAlbum: null,
    };
    this.selectedAlbum = this.selectedAlbum.bind(this);
  }
  componentDidMount() {
    const albums = request(
      `https://jsonplaceholder.typicode.com/albums?userId=${this.state.user.id}`,
      "GET"
    );
    albums.then((albums) => this.setState({ ...this.state, albums }));
  }
  selectedAlbum(album) {
    this.setState({ ...this.state, activeAlbum: album });
  }
  render() {
    const { albums, activeAlbum } = this.state;
    return (
      <>
        {albums ? (
          albums.map((album, i) => (
            <Album
              key={`album${i}`}
              album={album}
              selectedAlbum={this.selectedAlbum}
            />
          ))
        ) : (
          <p>loading...</p>
        )}
        {activeAlbum && <Photos activeAlbum={activeAlbum} />}
      </>
    );
  }
}
