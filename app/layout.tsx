import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import Navbar from './components/Navbar';
import { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ahmad-blog',
  description: 'created by Ahmad Dorri',
};

type Props = {
  children: ReactNode;
};
export default function RootLayout({ children }: Props) {
  return (
    <html lang="fa-IR" dir="ltr">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
