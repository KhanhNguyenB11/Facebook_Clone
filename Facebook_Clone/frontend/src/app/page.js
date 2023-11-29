import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
export default function Home() {
  return (
    <>
      <Header />
      <main className="flex bg-gray-100 w-full">
        <Sidebar />
      </main>
    </>
  );
}
