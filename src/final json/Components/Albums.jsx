import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import request from "../helpers/request";
import DarkMode from "../helpers/DarkMode";
import Album from "./Album";
export default function Albums() {
  const dark = useContext(DarkMode);
  const { userId } = useParams();
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    request(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then(
      (albums) => setAlbums(albums)
    );
  }, [userId]);
  console.log(albums);
  return (
    <div id="mainAlbum" className={dark ? "lightBgr" : "darkBgr"}>
      {albums &&
        albums.map((album, i) => <Album key={`album${i}`} album={album} />)}
    </div>
  );
}
