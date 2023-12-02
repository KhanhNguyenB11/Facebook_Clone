import { useSession } from "next-auth/react";
import React from "react";
import Image from "next/image";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { IoMdPhotos } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
function CreatePost() {
  const { data: session } = useSession();
  return (
    <div className="bg-white rounded-md shadow-md text-gray-500 p-2">
      <div className="flex p-4 space-x-2 items-center">
        <Image
          src={session?.user?.image}
          alt="user_image"
          width={40}
          height={40}
          className="rounded-full"
        />
        <form action="" className="flex flex-1">
          <input
            className="rounded-full h-12 flex-grow flex px-4 hover:bg-gray-200 transition-all duration-300 focus:outline-none font-md bg-gray-100"
            type="text"
            placeholder={`What's on your mind,${session?.user?.name}?`}
          />
        </form>
        <button hidden></button>
      </div>
      <div className="flex justify-evenly py-2">
        <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md cursor-pointer transition-colors duration-300">
            <HiOutlineVideoCamera size={25} className="text-red-500"/>
            <p className="font-semibold text-gray-600 ">Live Video</p>
        </div>
        <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md cursor-pointer transition-colors duration-300">
            <IoMdPhotos size={25} className="text-green-600"/>
            <p className="font-semibold text-gray-600 ">Photo/Video</p>
        </div>
        <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md cursor-pointer transition-colors duration-300">
            <BsEmojiSmile size={25} className="text-yellow-500"/>
            <p className="font-semibold text-gray-600 ">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
