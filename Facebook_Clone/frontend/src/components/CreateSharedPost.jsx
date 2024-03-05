import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Post from "./Post";
function CreateSharedPost({ post }) {
  const { data: session } = useSession();
  const currentUser = session.user;
  return (
    <div className="w-full h-full">
      <div className="w-full my-2">
        <div className="flex gap-3 items-center">
          <Image
            src={session?.user?.image}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full"
          />
          <p className="font-medium">{currentUser.name}</p>
        </div>
        <input
          type="text"
          placeholder={`What's on your mind, ${currentUser.name} ?`}
          className="w-full p-2 outline-none"
        />
      </div>
      <div className="border border-gray-300 my-2 rounded-md">
        <Post post={post} hideFooter={true}></Post>
      </div>
      <div className="flex justify-center w-full">
        <button className=" bg-blue-500 text-white border rounded-md p-2 transition-colors duration-300 hover:bg-blue-700 w-full">
          Share
        </button>
      </div>
    </div>
  );
}

export default CreateSharedPost;
