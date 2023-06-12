import ProfileImage from '@/components/ProfileImage';
import Link from 'next/link';
import React from 'react';
import { getSortedPostsData } from '@/lib/posts';
import getForamattedDate from '@/lib/getForamattedDate';

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <div>
      <ProfileImage />
      <p className="text-justify p-4 max-w-2xl mx-auto">
        Hi, I&apos;m Ahmad Dorri, a web developer with a passion for building
        web applications with Next.js and TypeScript and React.
        <br /> I&apos;m a software engineer with a passion for building scalable
        and secure applications.
        <br /> I&apos;m a self-motivated web developer who loves to learn and
        grow.
      </p>
      <h2 className="menu-title text-white uppercase text-center">Blogs</h2>
      <ul className="menu  menu-md ">
        {allPostsData.map((post) => (
          <li className="max-w-min mx-auto" key={post.id}>
            <Link className="grid gap-4" href={`/posts/${post.id}`}>
              <p>{post.title}</p>
              <p className="w-full">{getForamattedDate(post.date)}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
