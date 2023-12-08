import React from "react";
import { RiVideoAddFill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { CgMoreAlt } from "react-icons/cg";
import Contacts from "./Contacts";
function RightSideBar() {
  return (
    <div className="hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px] px-1">
      <div className="flex items-center text-gray-500">
        <p className="flex text-lg font-semibold flex-grow">Contacts</p>
        <div className="flex space-x-1 px-2">
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <BiSearch />
          </div>
        </div>
        <div className="flex space-x-1">
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <CgMoreAlt />
          </div>
        </div>
      </div>
      <Contacts status={"online"}/>
      <Contacts status={"online"}/>
      <Contacts />
    </div>
  );
}

export default RightSideBar;
