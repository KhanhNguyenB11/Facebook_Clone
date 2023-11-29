import React from "react";
import Image from "next/image";
import { ImUser } from "react-icons/im";
function Sidebar() {
  return (
    <div className="hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[302px]">
      <div className="flex items-center space-x-2 py-2 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer">
        <Image
          src="/Facebook_Logo.png"
          alt="Facebook_logo"
          width={40}
          height={40}
          className="rounded-full cursor-pointer"
        />
        <p className="hidden sm:inline-flex font-medium">Khanh</p>
      </div>
      <div className="flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer">
        <ImUser className="h-8 w-8 text-blue-500"/>
        <p className="hidden sm:inline-flex font-medium">Users</p>
      </div>
    </div>
  );
}

export default Sidebar;
