import { useState } from "react";
import React from "react";
import Image from "next/image";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";
import { PiShareFatLight } from "react-icons/pi";
import Comment from "./Comment";
import CreateComment from "./CreateComment";
import timeFormat from "@/timeFormat";
import { API_URL } from "@/Request";
import { useDispatch } from "react-redux";
import { useSession } from "next-auth/react";
import { addMultipleComment, likePost, unlikePost } from "../feature/postSlice";
import Modal from "react-modal";
import axios from "axios";
import CreateSharedPost from "./CreateSharedPost";
// Modal.setAppElement(".__className_e66fe9");
function Post({ post, hideFooter }) {
  const pageSize = 5;
  const { data: session } = useSession();
  const currentUser = session.user;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [commentSort,setCommentSort] = useState("");
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      width: "500px",
      maxHeight: "500px",
      overflowY: "scroll",
      transform: "translate(-50%, -50%)",
    },
  };

  const dispatch = useDispatch();
  function getComments() {
    if (!post.comments || post.comments.length < post.commentCount) {
      axios
        .get(
          `${API_URL}/comment?postId=${post.id}&sort=newest&userEmail=${currentUser.email}&current=${
            post.comments ? Math.ceil(post.comments.length / pageSize) : 0
          }`
        )
        .then((res) => {
          dispatch(addMultipleComment(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  function hanldeLikePost() {
    dispatch(likePost(post.id));
    axios
      .post(`${API_URL}/post/${post.id}/like?userEmail=${currentUser.email}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleUnlikePost() {
    dispatch(unlikePost(post.id));
    axios
      .post(`${API_URL}/post/${post.id}/unlike?userEmail=${currentUser.email}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  

  // Share Modal
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
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
            <p className="text-sm text-gray-500">
              {timeFormat(post?.timeStamp)}
            </p>
          </div>
        </div>
        <p className="py-2">{post?.post}</p>
      </div>
      {post?.img && (
        <div className="relative h-60 md:h-96 bg-white">
          <Image src={post?.img} layout="fill" objectFit="cover" />
        </div>
      )}
      {!hideFooter && (
        <div>
          {/* post likes comments shares stat */}
          <div className="flex justify-between bg-white p-2 text-gray-500 text-md">
            <div className="grow">
              {post.likeCount > 1
                ? `${post.likeCount} likes`
                : `${post.likeCount} like`}{" "}
            </div>
            <div className="flex gap-3">
              <p>
                {post.commentCount > 1
                  ? `${post.commentCount} comments`
                  : `${post.commentCount} comment`}{" "}
              </p>
              <p>12 shares</p>
            </div>
          </div>

          {/* footer */}
          <div className="flex items-center bg-white p-3 border border-gray-200 border-l-0 border-r-0 pb-2">
            <div className="flex items-center justify-center flex-grow space-x-1 hover:bg-gray-200 transition-colors duration-300 rounded-xl cursor-pointer">
              {post.userLiked ? (
                <>
                  <div
                    className="w-full flex gap-2 items-center justify-center text-blue-500"
                    onClick={handleUnlikePost}
                  >
                    <FaThumbsUp className="h-4 " />
                    <p className="text-sm sm:text-base">Like</p>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="w-full flex gap-2 items-center justify-center"
                    onClick={hanldeLikePost}
                  >
                    <FaRegThumbsUp className="h-4" />
                    <p className="text-sm sm:text-base">Like</p>
                  </div>
                </>
              )}
            </div>
            <div className="flex items-center justify-center space-x-1 hover:bg-gray-200 transition-colors duration-300 flex-grow rounded-xl cursor-pointer">
              <FaRegComment className="h-4" />
              <p className="text-sm sm:text-base">Comment</p>
            </div>
            <div className="flex-grow ">
              <div
                className="w-full flex items-center justify-center space-x-1 hover:bg-gray-200 transition-colors duration-300 rounded-xl cursor-pointer"
                onClick={openModal}
              >
                <PiShareFatLight className="h-4" />
                <p className="text-sm sm:text-base">Share</p>
              </div>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <div className="flex justify-center">
                  <p className="text-xl grow text-center font-bold ">Share</p>
                  <button
                    className=" bg-gray-200 rounded-full transition-colors duration-300 hover:bg-gray-300 px-2 text-3xl text-gray-500"
                    onClick={closeModal}
                  >
                    X
                  </button>
                </div>
                <CreateSharedPost post={post}></CreateSharedPost>
              </Modal>
            </div>
          </div>
          {/* Comment section */}
          <div className="pt-2 bg-white">
            {/* comments sorting and get more comments*/}
            <div className="flex justify-between px-2">
              <div>
                {!post.comments || post.comments.length < post.commentCount ? (
                  <span
                    className="cursor-pointer text-gray-500 font-semibold py-2 hover:underline"
                    onClick={getComments}
                  >
                    View more comments
                  </span>
                ) : (
                  ""
                )}
              </div>
              <select
                name=""
                id=""
                className="py-2 bg-white text-gray-500 font-semibold"
              >
                <option value="l">Most relevant</option>
                <option value="" className="">
                  Newest
                </option>
                <option value="" className="">
                  All Comments
                </option>
              </select>
            </div>
            {post.comments
              ? post.comments.map((comment, index) => {
                  return <Comment comment={comment} key={index}></Comment>;
                })
              : ""}
            <CreateComment postId={post.id}></CreateComment>
          </div>
        </div>
      )}
    </div>
  );
}

export default Post;
