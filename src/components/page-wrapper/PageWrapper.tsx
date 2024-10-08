// Start of Selection
import React, { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col" data-testid="page-wrapper">
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mt-16 mb-8 flex justify-center">
        <div className="w-full">{children}</div>
      </main>
      <footer className="mt-auto">{/* Footer content */}</footer>
    </div>
  );
};

export default PageWrapper;
