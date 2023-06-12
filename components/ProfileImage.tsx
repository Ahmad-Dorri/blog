import Image from 'next/image';
import React from 'react';

export default function ProfileImage() {
  return (
    <div className="avatar grid place-items-center w-[144px] h-[144px] mx-auto my-10 ">
      <Image
        className="rounded-full"
        src="/images/profile.jpg"
        alt="profile"
        width={100}
        height={100}
      />
      <h1 className="text-xl  text-white mt-1 ">Ahmad Dorri</h1>
    </div>
  );
}
