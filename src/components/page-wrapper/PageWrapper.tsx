// Start of Selection
import React, { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <main className="w-full max-w-4xl px-4 py-8">{children}</main>
      <footer className="w-full max-w-4xl px-4 py-4"></footer>
    </div>
  );
};

export default PageWrapper;
