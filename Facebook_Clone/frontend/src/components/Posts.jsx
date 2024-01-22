import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAllPost, selectPost } from "../feature/postSlice";
import { useSession } from "next-auth/react";

import Post from "./Post";
import axios from "axios";

function Posts() {
  const session = useSession();
  const URL = `http://localhost:8080/api/v1/post?userEmail=${session.data.user?.email}`;
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);
  useEffect(() => {
    let ignore = false;
    if (!load) {
      axios
        .get(URL)
        .then((res) => {
          if (!ignore) {
            dispatch(addAllPost(res.data));
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
    return () => {
        ignore = true;
    };
  }, []);
  const posts = useSelector(selectPost);
  return (
    <>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </>
  );
}

export default Posts;
