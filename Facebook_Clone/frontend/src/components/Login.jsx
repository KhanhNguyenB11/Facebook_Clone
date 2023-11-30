import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
function Login() {
  return (
    <div className="flex flex-col items-center mx-auto justify-center p-5 h-screen">
      <Image
        src="/Facebook_Logo.png"
        alt="Facebook_logo"
        width={240}
        height={240}
      />
      <h3 className="font-bold text-xl mt-7">Welcome to my Facebook_Clone</h3>
      <button onClick={signIn} href="#" className="px-20 py-4 z-10 text-2xl cursor-pointer bg-blue-500 rounded-md text-white mt-7 hover:bg-blue-700 transition-all duration-300">Login</button>
    </div>
  );
}

export default Login;
