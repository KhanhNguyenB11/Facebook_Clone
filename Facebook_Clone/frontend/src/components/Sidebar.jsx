import React from "react";
import Image from "next/image";
import SidebarItem from "./SidebarItem";
import { ImUser } from "react-icons/im";
import { MdGroup } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsStopwatch } from "react-icons/bs";
import { MdOndemandVideo } from "react-icons/md";
import { MdOutlineExpandMore } from "react-icons/md";


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
      <SidebarItem Icon={ImUser} value="Users"/>
      <SidebarItem Icon={MdGroup} value="Group"/>
      <SidebarItem Icon={AiOutlineShoppingCart} value="Market Place"/>
      <SidebarItem Icon={MdOndemandVideo} value="Watch"/>
      <SidebarItem Icon={BsStopwatch} value="Memories"/>
      <SidebarItem Icon={MdOndemandVideo} value="Live Video"/>
      <SidebarItem Icon={MdOutlineExpandMore} value="More"/>
    </div>
  );
}

export default Sidebar;
