// Start of Selection
import React, { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col" data-testid="page-wrapper">
      <main className="flex-grow container mx-auto flex justify-center">
        <div className="w-full">{children}</div>
      </main>
      <footer className="mb-8">{/* Footer content */}</footer>
    </div>
  );
};

export default PageWrapper;
