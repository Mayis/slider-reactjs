import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import request from "../helpers/request";
import DarkMode from "../helpers/DarkMode";
import Post from "./Post";
export default function Posts() {
  const dark = useContext(DarkMode);
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    request(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then(
      (posts) => setPosts(posts)
    );
  }, []);
  console.log(posts);
  return (
    <div id="mainPosts" className={dark ? "lightBgr" : "darkBgr"}>
      {posts && posts.map((post, i) => <Post key={`post${i}`} post={post} />)}
    </div>
  );
}
