import { useSession } from "next-auth/react";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { IoMdPhotos } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addPost } from "../feature/postSlice";
import axios from "axios";
function CreatePost() {
  const URL = "http://localhost:8080/api/v1/post";
  const { data: session } = useSession();
  const inputRef = useRef(null);
  const hiddenFileInput = useRef(null);
  const [postImage, setPostImage] = useState(null);
  const dispatch = useDispatch();
  function handlePhotoClick() {
    hiddenFileInput.current.click();
  }
  function addImgToPost(e) {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        setPostImage(e.target.result);
      };
    }
  }
  function handleRemoveImg() {
    setPostImage(null);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!inputRef.current.value) return;
    const formData = new FormData();
    formData.append("file", postImage);
    formData.append("post", inputRef.current.value);
    formData.append("email", session?.user.email);
  
    axios
      .post(URL, formData, {
        headers: {
          Accept: "application/JSON",
        },
      })
      .then((res) => {
        inputRef.current.value = "";
        dispatch(addPost(res.data));
        handleRemoveImg();
      })
      .catch((err) => {
        console.error(err);
      });
  }
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
            ref={inputRef}
            placeholder={`What's on your mind,${session?.user?.name}?`}
          />
          <button hidden onClick={handleSubmit}></button>
        </form>
        
      </div>

      {/* Show img if selected */}
      {postImage ? (
        <div className="flex items-center px-3 justify-center">
          <div className="relative w-fit flex justify-center items-center group">
            <p
              className="absolute text-white text-7xl cursor-pointer invisible group-hover:visible peer z-10"
              onClick={handleRemoveImg}
            >
              X
            </p>
            <img
              src={postImage}
              alt="Post_image"
              className="h-60 object-contain  transition-all duration-300 hover:brightness-50 peer-hover:brightness-50"
            />
          </div>
        </div>
      ) : (
        ""
      )}

      {/* Create Post footer components */}
      <div className="flex justify-evenly py-2">
        <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md cursor-pointer transition-colors duration-300">
          <HiOutlineVideoCamera size={25} className="text-red-500" />
          <p className="font-semibold text-gray-600 ">Live Video</p>
        </div>
        <div
          className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md cursor-pointer transition-colors duration-300"
          onClick={handlePhotoClick}
        >
          <IoMdPhotos size={25} className="text-green-600" />
          <p className="font-semibold text-gray-600 ">Photo/Video</p>
          <input
            onChange={addImgToPost}
            type="file"
            hidden
            accept="image/*"
            ref={hiddenFileInput}
          />
        </div>
        <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md cursor-pointer transition-colors duration-300">
          <BsEmojiSmile size={25} className="text-yellow-500" />
          <p className="font-semibold text-gray-600 ">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
