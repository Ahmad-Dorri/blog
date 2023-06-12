import Image from 'next/image';
import React from 'react';

export default function NotFound() {
  return (
    <div className="alert  text-white ">
      <h1>Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <p>You may have mistyped the address or the page may have moved.</p>
      <Image src="/images/404.png" alt="404" width={500} height={500} />
    </div>
  );
}
