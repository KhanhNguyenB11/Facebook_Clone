import React from "react";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa6";
import { PiShareFatLight } from "react-icons/pi";
function Post({ post }) {
  return (
    <div className="flex flex-col" key={post?.id}>
      <div className="bg-white mt-6 rounded-md p-2">
        <div className="flex items-center space-x-2">
          <img
            src={post?.profilePic}
            alt=""
            className="rounded-full w-10 h-10"
          />
          <div>
            <p className="font-medium">{post.name}</p>
            <p className="text-sm text-gray-500">{post?.timeStamp}</p>
          </div>
        </div>
        <p className="py-2">{post?.post}</p>
      </div>
      {post?.img && (
        <div className="relative h-60 md:h-96 bg-white">
          <Image src={post?.img} layout="fill" objectFit="cover" />
        </div>
      )}
      {/* footer */}
      <div className="flex items-center bg-white p-3">
        <div className="flex items-center justify-center flex-grow space-x-1 hover:bg-gray-200 transition-colors duration-300 rounded-xl cursor-pointer">
          <FiThumbsUp className="h-4" />
          <p className="text-sm sm:text-base">Like</p>
        </div>
        <div className="flex items-center justify-center space-x-1 hover:bg-gray-200 transition-colors duration-300 flex-grow rounded-xl cursor-pointer">
          <FaRegComment className="h-4" />
          <p className="text-sm sm:text-base">Comment</p>
        </div>
        <div className="flex items-center justify-center space-x-1 hover:bg-gray-200 transition-colors duration-300 flex-grow rounded-xl cursor-pointer">
          <PiShareFatLight className="h-4" />
          <p className="text-sm sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
