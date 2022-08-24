import React, { useContext } from "react";
import DarkMode from "../helpers/DarkMode";
export default function Comment({ com }) {
  const { email, body } = com;
  const dark = useContext(DarkMode);
  console.log(1);
  return (
    <div className="oneCom">
      <h4 className={dark ? "dark" : "light"}>{email}</h4>
      <p className={dark ? "dark" : "light"}>{body}</p>
    </div>
  );
}
