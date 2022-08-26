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
    const userPost = `?userId=${userId}`;
    const allPost = "";
    request(
      `https://jsonplaceholder.typicode.com/posts${userId ? userPost : allPost}`
    ).then((posts) => setPosts(posts));
  }, [userId]);
  console.log(userId);
  return (
    <div id="mainPosts" className={dark ? "lightBgr" : "darkBgr"}>
      {posts && posts.map((post, i) => <Post key={`post${i}`} post={post} />)}
    </div>
  );
}
