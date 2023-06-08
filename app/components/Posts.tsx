import { getSortedPostsData } from '@/lib/posts';
import React from 'react';

export default function Posts() {
  const posts = getSortedPostsData();
  return <div></div>;
}
