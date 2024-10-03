// Start of Selection
import React, { ReactNode } from "react";
import Navbar from "../navbar/NavBar"; // Corrected import path

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <main className="flex-grow container mx-auto px-4">{children}</main>
      <footer className="bg-gray-800 text-white p-4 text-center"></footer>
    </div>
  );
};

export default PageWrapper;
