import React from "react";
import Image from "next/image";
function Comment() {
  return (
    <>
      <div className="bg-white w-full flex justify-start pl-6 items-center pb-5">
        <Image
          src="/Facebook_Logo.png"
          alt="user-comment"
          width={35}
          height={35}
          className="rounded-full "
        />
        <div>
        <div className="ml-3 bg-gray-200 rounded-md p-2">
          <p className="font-bold">User name</p>
          <p className="text-center">Comment content</p>
        </div>
        <div className="bg-white flex gap-2 pl-4">
            <p className="text-sm text-gray-500">1h ago</p>
            <p className="text-sm text-gray-500 font-bold">Reply</p>
            <p className="text-sm text-gray-500 font-bold">Delete</p>
          </div>
        </div>
      </div>
          
    </>
  );
}

export default Comment;
