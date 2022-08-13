import React, { Component } from "react";
import request from "./helper";

export default class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: null,
    };
  }
  async componentDidMount() {
    const photos = request(
      `https://jsonplaceholder.typicode.com/photos?albumId=${this.props.activeAlbum.id}`,
      "GET"
    );
    photos.then((photos) => this.setState({ photos }));
  }
  componentDidUpdate(prevProps) {
    if (this.props.activeAlbum !== prevProps.activeAlbum) {
      request(
        `https://jsonplaceholder.typicode.com/photos?albumId=${this.props.activeAlbum.id}`,
        "GET"
      ).then((photos) => {
        return this.setState({ photos });
      });
    }
  }
  render() {
    const { photos } = this.state;
    console.log(photos);
    return <div>see Console </div>;
  }
}
