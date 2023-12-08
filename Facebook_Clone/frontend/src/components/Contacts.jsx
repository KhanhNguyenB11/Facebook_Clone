import React from "react";
import Image from "next/image";
function Contacts({ status }) {
  return (
    // static user
    <div className="flex items-center space-x-2 relative mt-3">
      <Image
        src="/Facebook_Logo.png"
        alt="Facebook_logo"
        width={35}
        height={35}
        className=" cursor-pointer rounded-full"
      ></Image>
      <p className="hidden sm:inline-flex text-sm">Name</p>
      {status == "online" ? (
        <div className="absolute bg-green-500 h-[0.75rem] w-[0.75rem] rounded-full left-[1rem] bottom-0 border-2"></div>
      ) : (
        <div className="absolute bg-gray-100 h-[0.75rem] w-[0.75rem] rounded-full left-[1rem] bottom-0 border-2"></div>
      )}
    </div>
  );
}

export default Contacts;
