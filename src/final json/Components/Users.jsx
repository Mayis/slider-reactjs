import React, { useState, useEffect, useContext } from "react";
import DarkMode from "../helpers/DarkMode";
import request from "../helpers/request";
import User from "./User";
export default function Users() {
  const dark = useContext(DarkMode);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    request("https://jsonplaceholder.typicode.com/users").then((users) =>
      setUsers(users)
    );
  }, []);

  return (
    <div id="mainUsers" className={dark ? "lightBgr" : "darkBgr"}>
      {users && users.map((user, i) => <User key={`user${i}`} user={user} />)}
    </div>
  );
}
