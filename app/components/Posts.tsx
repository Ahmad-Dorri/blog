import { getSortedPostsData } from '@/lib/posts';
import React from 'react';
import ListItem from './ListItem';

export default function Posts() {
  const posts = getSortedPostsData();
  return (
    <section>
      <ul className="menu bg-base-200 max-w-full mt-10 rounded-box">
        <li>
          <h2 className="menu-title uppercase font-bold text-white ">Blog</h2>
          <ul>
            {posts.map((post) => (
              <ListItem key={post.id} post={post} />
            ))}
          </ul>
        </li>
      </ul>
    </section>
  );
}
