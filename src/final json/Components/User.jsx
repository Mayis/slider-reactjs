import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import DarkMode from "../helpers/DarkMode";

export default function User({ user }) {
  const { name, phone, id } = user;
  const dark = useContext(DarkMode);

  return (
    <div className="oneUser">
      <div className="info">
        <h3 className={`userName  ${dark ? "dark" : "light"}`}>{name}</h3>
        <p className={`userPhone  ${dark ? "dark" : "light"}`}>{phone}</p>
      </div>
      <div className="btn">
        <NavLink
          className={`userpost  ${dark ? "dark" : "light"}`}
          to={`/posts/${id}`}
        >
          POSTS
        </NavLink>
        <NavLink
          className={`useralbum  ${dark ? "dark" : "light"}`}
          to={`/albums/${id}`}
        >
          ALBUMS
        </NavLink>
      </div>
    </div>
  );
}
