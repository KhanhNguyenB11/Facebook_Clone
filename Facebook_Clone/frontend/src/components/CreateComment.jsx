import React, { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { AiOutlineSend } from "react-icons/ai";
import axios from "axios";
import { API_URL } from "@/Request";
import { useDispatch } from "react-redux";
import { addComment } from "../feature/postSlice";
function CreateComment({ postId }) {
  const [comment, setComment] = useState("");
  const session = useSession();
  const dispatch = useDispatch();
  function sendComment() {
    let newComment = {
      content: comment,
      timeStamp: new Date().toISOString(),
      userEmail: session.data.user?.email,
      userName: session.data.user?.name,
      profilePic: session.data.user?.image,
      postId: postId,
    };
   
    axios
      .post(`${API_URL}/comment`, newComment)
      .then((res) => {
        setComment("");
        console.log(res);
        dispatch(addComment(newComment));
      })
      .catch((err) => {
        console.log(err)
      });
   
  }
  return (
    <div className="flex justify-between items-center gap-2 p-2 rounded-lg bg-white ">
      <div className="flex items-center grow">
        <Image
          src={session?.data?.user?.image}
          alt="user_image"
          width={40}
          height={40}
          className="rounded-full"
        />

        <input
          type="text"
          placeholder="Add a comment..."
          className="bg-transparent outline-none ml-2 p-2 w-full hover:bg-gray-200 rounded-lg transition-all duration-200 ease-in-out "
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              sendComment(e);
            }
          }}
        />
      </div>
      <AiOutlineSend
        className="cursor-pointer"
        onClick={sendComment}
      ></AiOutlineSend>
    </div>
  );
}

export default CreateComment;
