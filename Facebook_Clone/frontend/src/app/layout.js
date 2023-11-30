import "./globals.css";
import { Inter } from "next/font/google";
import SessionProvider from "../components/SessionProvider";
import { getServerSession } from "next-auth";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Facebook_Clone",
  description: "Facebook_Clone using react and Spring",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
