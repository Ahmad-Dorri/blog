import { Metadata } from 'next';
import React, { ReactNode } from 'react';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import './globals.css';
import Navbar from '@/components/Navbar';
export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page',
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-US">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
