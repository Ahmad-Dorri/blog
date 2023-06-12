import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
export const metadata: Metadata = {
  title: 'posts',
  description: 'posts',
};
export default function Posts() {
  return <Link href="/posts/52">go to 52 page</Link>;
}
