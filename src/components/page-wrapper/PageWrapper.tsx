// Start of Selection
import React, { ReactNode } from "react";
import Navbar from "../navbar/NavBar"; // Corrected import path

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

export default PageWrapper;
