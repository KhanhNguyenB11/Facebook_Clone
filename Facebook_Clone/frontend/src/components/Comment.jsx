import React from "react";
import Image from "next/image";
import timeFormat from "@/timeFormat";
import axios from "axios";
import { API_URL } from "@/Request";
import { useSession } from "next-auth/react";
function Comment({ comment }) {
  const { data: session } = useSession();
  const currentUser = session.user;
  function handleLikeComment() {
    const action = comment.userLiked ? "unlike" : "like";
    axios.post(`${API_URL}/comment/${comment.id}/${action}?userEmail=${currentUser.email}`)
    .then(response => {
      // Handle successful response if needed
      console.log('Comment liked successfully:', response.data);
    })
    .catch(error => {
      // Handle error
      console.error('Error liking comment:', error);
    });
  }
  return (
    <>
      <div className="bg-white w-full flex justify-start pl-6 items-center pb-5">
        <Image
          src={comment.profilePic}
          alt="user-comment"
          width={35}
          height={35}
          className="rounded-full "
        />
        <div>
          <div className="ml-3 bg-gray-200 rounded-md p-2">
            <p className="font-bold text-sm">{comment.userName}</p>
            <p className="text-left">{comment.content}</p>
          </div>
          <div className="bg-white flex gap-2 pl-4">
            <p className="text-sm text-gray-500">
              {timeFormat(comment.timeStamp)}
            </p>
            <p
              className={`text-sm font-bold cursor-pointer hover:underline ${
                comment.userLiked ? "text-blue-500" : "text-gray-500 "
              }`}
              onClick={handleLikeComment}
            >
              Like
            </p>
            <p className="text-sm text-gray-500 font-bold">Reply</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comment;
