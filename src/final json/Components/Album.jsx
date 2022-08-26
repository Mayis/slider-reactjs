import React from "react";
import { useContext } from "react";
import DarkMode from "../helpers/DarkMode";
import { NavLink } from "react-router-dom";
export default function Album({ album }) {
  const { title, id } = album;
  const dark = useContext(DarkMode);
  return (
    <div className="oneAlbum">
      <h4 className={`albumTitle ${dark ? "dark" : "light"}`}>
        {title}
        <NavLink
          className={`photos ${dark ? "dark" : "light"}`}
          to={`/albums/photos/${id}`}
        >
          &#128248;
        </NavLink>
      </h4>
    </div>
  );
}
