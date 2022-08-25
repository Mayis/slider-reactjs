import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import DarkMode from "../helpers/DarkMode";
import request from "../helpers/request";
import Photo from "./Photo";

export default function Photos() {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState([]);
  const dark = useContext(DarkMode);
  useEffect(() => {
    request(
      `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
    ).then((photos) => setPhotos(photos));
  }, [albumId]);
  console.log(photos);
  return (
    <div id="mainPhotos" className={dark ? "lightBgr" : "darkBgr"}>
      {photos &&
        photos.map((photo, i) => <Photo key={`photo${i}`} photo={photo} />)}
    </div>
  );
}
