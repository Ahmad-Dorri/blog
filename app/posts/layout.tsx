import React from 'react';
import Link from 'next/link';

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div>
      {children}
      <Link className="btn btn-primary btn-block  mt-10  " href="/">
        Back to Home
      </Link>
    </div>
  );
}
