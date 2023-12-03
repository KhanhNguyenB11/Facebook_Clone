"use client";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useSession } from "next-auth/react";
import Login from "@/components/Login";
import Feed from "@/components/Feed";
import RightSideBar from "@/components/RightSideBar";
export default function Home() {
  const session = useSession();
  return (
    <>
      {session.status == "authenticated" ? (
        <>
          <Header />
          <main className="flex bg-gray-100 w-full">
            <Sidebar />
            <Feed />
            <RightSideBar />
          </main>
        </>
      ) : (
        <Login />
      )}
    </>
  );
}
