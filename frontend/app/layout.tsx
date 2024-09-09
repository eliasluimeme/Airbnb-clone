import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import Modal from "./components/modals/modal";
import LoginModal from "./components/modals/loginModal";
import SignupModal from "./components/modals/signupModal";
import AddPropertyModal from "./components/modals/addPropertyModal";
import SearchModal from "./components/modals/searchModal";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb Clone",
  description: "Airbnb clone with Nextjs, Tailwind and Django DRF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = (
      <div>Modal cont</div>
  )

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        <div className="pt-32">
          {children}
        </div>

        <LoginModal />

        <SearchModal />

        <SignupModal />

        <AddPropertyModal />
        {/* <ToastContainer /> */}
        </body>
    </html>
  );
}
