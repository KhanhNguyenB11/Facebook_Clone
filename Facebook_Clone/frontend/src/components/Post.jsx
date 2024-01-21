import React from "react";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa6";
import { PiShareFatLight } from "react-icons/pi";
import Comment from "./Comment";
import CreateComment from "./CreateComment";
import timeFormat from "@/timeFormat";
import { API_URL } from "@/Request";
import { useDispatch } from "react-redux";
import { addMultipleComment } from "../feature/postSlice";
import axios from "axios";
function Post({ post }) {
  const dispatch = useDispatch();
  function getComments() {
    axios.get(`${API_URL}/comment?postId=${post.id}`)
    .then(res=>{
      dispatch(addMultipleComment(res.data));
    })
    .catch(err=>{
      console.log(err);
    })
  }
  return (
    <div className="flex flex-col" key={post?.id}>
      <div className="bg-white rounded-md mt-6 p-2">
        <div className="flex items-center space-x-2">
          <img
            src={post?.user?.img}
            alt=""
            className="rounded-full w-10 h-10"
          />
          <div>
            <p className="font-medium">{post.user?.userName}</p>
            <p className="text-sm text-gray-500">{timeFormat(post?.timeStamp)}</p>
          </div>
        </div>
        <p className="py-2">{post?.post}</p>
      </div>
      {post?.img && (
        <div className="relative h-60 md:h-96 bg-white">
          <Image src={post?.img} layout="fill" objectFit="cover" />
        </div>
      )}
      {/* post likes comments shares stat */}
      <div className="flex justify-between bg-white p-2 text-gray-500 text-md">
        <div className="grow">100 Likes</div>
        <div className="flex gap-3">
          <p>{post.commentCount > 1 ? `${post.commentCount} comments`:`${post.commentCount} comment`} </p>
          <p>12 shares</p>
        </div>

      </div>
      {/* footer */}
      <div className="flex items-center bg-white p-3 border border-gray-200 border-l-0 border-r-0 pb-2">
        <div className="flex items-center justify-center flex-grow space-x-1 hover:bg-gray-200 transition-colors duration-300 rounded-xl cursor-pointer">
          <FiThumbsUp className="h-4" />
          <p className="text-sm sm:text-base">Like</p>
        </div>
        <div className="flex items-center justify-center space-x-1 hover:bg-gray-200 transition-colors duration-300 flex-grow rounded-xl cursor-pointer">
          <FaRegComment className="h-4" />
          <p className="text-sm sm:text-base" onClick={getComments}>Comment</p>
        </div>
        <div className="flex items-center justify-center space-x-1 hover:bg-gray-200 transition-colors duration-300 flex-grow rounded-xl cursor-pointer">
          <PiShareFatLight className="h-4" />
          <p className="text-sm sm:text-base">Share</p>
        </div>
      </div>
      {/* Comment section */}
      <div className="pt-2 bg-white">
        {post.comments
          ? post.comments.map((comment, index) => {
              return <Comment comment={comment} key={index}></Comment>;
            })
          : ""}
        <CreateComment postId={post.id}></CreateComment>
      </div>
    </div>
  );
}

export default Post;
