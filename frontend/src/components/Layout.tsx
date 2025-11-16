import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
}

export default function Layout({
  children,
  showHeader = true,
  showFooter = true,
}: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      {showHeader && <Header />}
      <main className="flex-grow w-full">
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
}