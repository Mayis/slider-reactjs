import React, { useContext, useEffect, useState } from "react";
import DarkMode from "../helpers/DarkMode";
import request from "../helpers/request";
import Comment from "./Comment";
export default function Post({ post }) {
  const { title, body, id } = post;
  const dark = useContext(DarkMode);
  const [comments, setComments] = useState(null);
  const getCom = () => {
    request(`https://jsonplaceholder.typicode.com/comments?postId=${id}`).then(
      (comments) => setComments(comments)
    );
  };

  return (
    <>
      <div className="onePost">
        <h4 className={`postTitle ${dark ? "dark" : "light"}`}>
          {title}{" "}
          <span
            className={`comment ${dark ? "darl" : "light"}`}
            onClick={getCom}
          >
            &#128172;
          </span>
        </h4>
        <p className={`postBody ${dark ? "dark" : "light"}`}>{body}</p>
      </div>
      {comments && (
        <div id="mainCom" onClick={(e) => setComments(null)}>
          <div className="com" onClick={(e) => e.stopPropagation()}>
            {comments.map((comment, i) => (
              <Comment key={`com${i}`} com={comment} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
