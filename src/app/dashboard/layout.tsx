import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import SideNav from '@/app/ui/dashboard/sidebar';
import React from 'react';

interface ProtectedLayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

const poppins = Poppins({ subsets: ['latin'], weight: '400' });
export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard Build and Service'
};

const Layout = async ({ children }: ProtectedLayoutProps) => {
  return (
    <>
      <div
        className={`flex h-screen flex-col md:flex-row md:overflow-hidden ${poppins.className}`}
      >
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
